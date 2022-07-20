import "./Home.scss";
import AboutUs from "../../components/AboutUs/AboutUs.component";
import OfferPriceInfo from "../../components/requestAQuote/OfferPriceInfo/OfferPriceInfo.component";
import TimeSaving from "../../components/requestAQuote/TimeSaving/TimeSaving.component";
import ContactUs from "../../components/ContactUs/ContactUs.component";
import ButtonShare from "../../shared/Button/Button.shared";
import Divider from "../../shared/Divider/Divider.shared";
import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import FlancerAdvsGridCards from "../../components/FreeLancer/FlancerAdvertisingComponent/FlancerAdvsGridCard/FlancerAdvsGridCard.component";
import FlancerAdvsTitle from "../../components/FreeLancer/FlancerAdvertisingComponent/FlancerAdvsTitle/FlancerAdvsTitle.component";
import CategoryTitleComponent from "../../components/category/CategoryTitle/CategoryTitle.component";
import CategoryListComponent from "../../components/category/CategoryList/CategoryList.component";
import { advertisingLists } from "../../core/services/AdvertisingOfferServices/AdvertisingOfferServices.core";
import { homePages } from "../../core/services/HomeServices/Home.core";
import { NavLink } from "react-router-dom";
const Home = () => {
  const categoryList = [
    {
      iconName: "imLT-electronic",
      categoryName: "الالكترونية",
    },
    {
      iconName: "imLT-category-analysis",
      categoryName: "الالكترونية",
    },
    {
      iconName: "imLT-electronic",
      categoryName: "الالكترونية",
    },
    {
      iconName: "imLT-category-analysis",
      categoryName: "الالكترونية",
    },
  ];
  const [sectionNum, setSectionNum] = useState();
  useEffect(() => {
    let cancel = false;
    if (cancel) return;
    homePages._GET_HomePagesSections(1).then((res) => {
      setSectionNum(res.data?.data);
    });
    return () => {
      cancel = true;
    };
  }, []);
  const [sectionThreeData, setSectionThreeData] = useState({ image: [] });
  const [sectionFourData, setSectionFourData] = useState({ url: "" });
  const handleSectionOne = useCallback(() => {
    sectionNum?.map((homeData) => {
      if (homeData?.section === "3" || homeData?.section === "4") {
        switch (homeData?.key) {
          case "home_section_3_image":
            return setSectionThreeData((sectionThreeData) => ({
              ...sectionThreeData,
              image: homeData.value,
            }));
          case "home_section_4_url":
            return setSectionFourData((sectionFourData) => ({
              ...sectionFourData,
              url: homeData.value,
            }));
          default:
            return false;
        }
      }
    });
  }, [sectionNum]);
  useEffect(() => {
    let cancel = false;
    if (cancel) return;
    handleSectionOne();
    return () => {
      cancel = true;
    };
  }, [handleSectionOne]);
  // TODO API Retuen Only My Advertising By Catgeoryt
  // Todo Block Of Get All Advertising Form
  const [userAdvsDetatils, setUserAdvsDetatils] = useState();
  //  Use MEMO Function To Store Whte API Return Advertising List Data
  const listOfUsersAdvs = useMemo(() => {
    return advertisingLists
      ._GET_AllAdvsOffer(4, false, 1, false, "")
      .then((res) => {
        setUserAdvsDetatils(res.data.data);
      })
      .catch((err) => {
        return err.response;
      });
  }, []);
  // Fire UseMemo Function One Time And Listen To State Value If Change So Fire Again And Get New Response
  useEffect(() => {
    const timeout = setTimeout(() => {
      return listOfUsersAdvs;
    }, 300);
    return () => clearTimeout(timeout);
  }, [userAdvsDetatils, listOfUsersAdvs]);
  return (
    <>
      <section className="container-fluid cLT-main-bg px-0 text-center LT-aboutUs-holder">
        <AboutUs data={sectionNum} />
      </section>
      <section className="container-fluid container-lg px-0">
        <OfferPriceInfo data={sectionNum} />
        <TimeSaving data={sectionNum} />
      </section>
      <Divider spaceSize="py-5" />
      <section className="container-md px-0 text-center ">
        <CategoryTitleComponent data={sectionNum} />
        {sectionThreeData?.image?.length !== 0 ? (
          <section className="LT-card-grid-holder ">
            {sectionThreeData?.image?.map((category, ix) => {
              return (
                <CategoryListComponent
                  ix={ix}
                  iconName={category.iconName}
                  categoryName={category.categoryName}
                  key={ix}
                />
              );
            })}
          </section>
        ) : (
          <div className="d-flex flex-column justify-content-center align-items-center w-100">
            <div
              className="imLT-main-logo uLT-img-contain uLT-f-radius-sB img-fluid uLT-f-radius-sB"
              style={{ width: "200px", height: "200px" }}
            ></div>
            <p className="mb-0 fLT-Bold-sD cLT-gray-text">
              لا يتوافر اشغال حاليا
            </p>
          </div>
        )}
      </section>
      <Divider spaceSize="py-5" />
      <section className="container-md d-flex flex-column px-2 px-sm-3 px-md-4 ">
        <FlancerAdvsTitle data={sectionNum} />
        <section className="LT-card-grid-holder">
          {userAdvsDetatils?.map((elem, idx) => {
            return (
              <NavLink
                className="uLT-list-style"
                to={`/advertising/advertise-details/${elem?.id}`}
                key={idx}
              >
                {" "}
                <FlancerAdvsGridCards data={elem} key={idx} />{" "}
              </NavLink>
            );
          })}
        </section>
        <Divider spaceSize="py-4" />
        <section className="d-flex w-100 px-0 justify-content-center align-items-center ">
          <NavLink to={sectionFourData?.url} className="shadow uLT-f-radius-sB">
            <ButtonShare
              btnClasses="cLT-secondary-bg px-4 uLT-f-radius-sB py-3"
              textClasses="px-4 cLT-white-text fLT-Regular-sC"
              innerText="عرض الكل"
            />
          </NavLink>
        </section>
      </section>
      <Divider spaceSize="py-5" />
      <section className="container-md px-3 px-sm-4 px-lg-0 text-center ">
        <ContactUs data={sectionNum} />
      </section>
      <Divider spaceSize="pb-5" />
    </>
  );
};

export default React.memo(Home);
