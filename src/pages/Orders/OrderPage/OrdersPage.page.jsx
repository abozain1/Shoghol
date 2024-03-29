import React, { useEffect, useMemo, useRef, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import OrderListCardComponent from "../../../components/OrdersComponent/OrderListCard/OrderListCard.component";
import { userOfferPrice } from "../../../core/services/OfferPriceService/OfferPriceService.core";
import AmentiesShared from "../../../shared/Amenties/Amenties.shared";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";
import cls from "./OrderPage.module.scss";
import DynamicFilter from "./DynamicFilter";
import { API } from "../../../enviroment/enviroment/enviroment";
const categories = [
  {
    id: 1,
    title: "برمجة",
    subs: [
      { id: 1, title: "برمجة ويب" },
      { id: 1, title: "برمجة ويب" },
      { id: 1, title: "برمجة ويب" },
      { id: 1, title: "برمجة ويب" },
    ],
  },
  { id: 2, title: "جوال" },
  { id: 3, title: "جرافيك" },
  { id: 4, title: "عروض" },
  { id: 5, title: "فيديو" },
  { id: 6, title: "مايكرو" },
  { id: 7, title: "رسم" },
  {
    id: 8,
    title: "ترجمة",
    subs: [
      { id: 1, title: "برمجة ويب" },
      { id: 1, title: "برمجة ويب" },
      { id: 1, title: "برمجة ويب" },
      { id: 1, title: "برمجة ويب" },
    ],
  },
  { id: 9, title: "شغل" },
  { id: 10, title: "قيادة" },
  { id: 11, title: "تسويق" },
  { id: 12, title: "محاسبة" },
  { id: 13, title: "علوم" },
  { id: 14, title: "شبكات" },
];
const mostUse = [
  { id: 1, name: "افراد" },
  { id: 2, name: "شركات" },
  { id: 3, name: "بالقرب مني" },
  { id: 4, name: "الاكثر رد علي الطلبات" },
];
const OrdersPage = () => {
  const param = useParams();
  const navigate = useNavigate();
  // Todo Block Of Get All Advertising Form
  const [vistorUser, getSearchKey] = useSelector((state) => [
    state.authentication.loggedIn,
    state.search,
  ]);
  const key = useSelector((state) => state.search.searchKey);
  const [currentPage, setCurrentPage] = useState(null);
  const [userOfferDetatils, setUserOfferDetatils] = useState();

  //  Use MEMO Function To Store Whte API Return Advertising List Data
  const [price, setPrice] = useState([]);
  const [categ, setCateg] = useState([]);
  const [location, setLocation] = useState("");
  const categHandler = (id, state) => {
    state
      ? setCateg([...categ, id])
      : setCateg(categ.filter((ele) => ele != id));
  };
  const timeRef = useRef(0);
  const listOfUsersOrder = useMemo(() => {
    clearTimeout(timeRef.current);
    timeRef.current = setTimeout(() => {
      const body = new FormData();
      body.set("perPage", 20);
      body.set("pagination", true);
      body.set("search", true);
      body.set("name", key);

      body.set("category", categ);
      body.set("price", price);
      body.set("location", location);

      return userOfferPrice
        ._POST_AllOrderListV2(body)
        .then((res) => {
          setUserOfferDetatils(res.data.data);
        })
        .catch((err) => {
          return err.response;
        });
    }, 1000);
    return () => clearTimeout(timeRef.current);
  }, [price, location, categ, key]);
  // Fire UseMemo Function One Time And Listen To State Value If Change So Fire Again And Get New Response
  useEffect(() => {
    const timeout = setTimeout(() => {
      return listOfUsersOrder;
    }, 1200);
    return () => clearTimeout(timeout);
  }, [userOfferDetatils, listOfUsersOrder]);

  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    try {
      const res = await API.get("coredata/category/list");
      setCategories(res.data?.data);
    } catch (e) {}
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  // ? ------------------[[[START Block]]]-----------------
  //*TODO GET From API Response ==> Advertising Pagination
  const [pagination, setPagination] = useState();
  const handleAdvsPagination = useMemo(() => {
    setPagination(userOfferDetatils?.pagination?.total_pages);
  }, [userOfferDetatils?.pagination]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!userOfferDetatils?.pagination) {
        return handleAdvsPagination;
      }
    }, 1000);
    return clearTimeout(timeout);
  }, [userOfferDetatils?.pagination, handleAdvsPagination]);
  // TODO GET From API Response ==> Advertising Pagination
  // ? ------------------[[[END Block]]]-----------------

  // Todo Set Current Page
  const getPageNumber = (e, value) => {
    setCurrentPage(param.num);
    navigate(`/orders/page=${value}`);
    window.scrollTo({
      top: 250,
      behavior: "smooth",
    });
  };
  // Condition For Show Loading Style Untill Data Return From API
  if (!userOfferDetatils)
    return (
      <div
        className="d-flex justify-content-center align-items-center w-100 "
        style={{ height: "100vh" }}
      >
        <div
          className="imLT-main-logo uLT-img-contain uLT-f-radius-sB img-fluid uLT-f-radius-sB"
          style={{ width: "200px", height: "200px" }}
        ></div>
      </div>
    );

  return (
    <>
      <div className={cls.container}>
        <div className="d-flex"></div>
        <div className={cls.holder}>
          <DynamicFilter
            setCategory={categHandler}
            setPrice={setPrice}
            setLocation={setLocation}
            mostUse={mostUse}
            categories={categories}
          />
          {userOfferDetatils.length !== 0 ? (
            <div className="cLT-white-bg p-3 ">
              {userOfferDetatils?.map((offer, ix) => {
                return (
                  <NavLink
                    className="card px-3 pt-3 mb-3 uLT-f-radius-sB uLT-list-style"
                    to={`/orders/order-details/${offer.id}`}
                    key={ix}
                  >
                    {" "}
                    <OrderListCardComponent
                      roll={vistorUser}
                      offer={offer}
                      amentiesSelector={
                        <AmentiesShared
                          orderData={offer}
                          amentiesWithIcon="orderAmenties"
                        />
                      }
                      orderDescription={offer?.description}
                      orderTitle={offer?.name}
                      orderStyle={"uLT-bd-b-platinum-sA"}
                      orderStatus={offer?.status?.name}
                    />{" "}
                  </NavLink>
                );
              })}
            </div>
          ) : (
            <div
              className="d-flex flex-column justify-content-center align-items-center w-100  "
              style={{ height: "100vh " }}
            >
              <div
                className="imLT-main-logo uLT-img-contain uLT-f-radius-sB img-fluid uLT-f-radius-sB"
                style={{ width: "200px", height: "200px" }}
              ></div>
              <p className="mb-0 fLT-Bold-sD cLT-gray-text">
                لا يوجد طلبــــات
              </p>
            </div>
          )}
        </div>
        {/* Pagination [Holder] */}
        <div className="container d-flex justify-content-center pt-4 mt-auto">
          {/* Pagination [Number Navigate Holder] */}
          <Stack>
            <Pagination
              dir="rtl"
              showFirstButton={true}
              showLastButton={true}
              count={pagination}
              page={parseInt(param?.num)}
              onChange={getPageNumber}
              size="large"
            />
          </Stack>
        </div>
      </div>
    </>
  );
};

export default OrdersPage;
