import './OfferUpdateForm.component.scss'
import ButtonShare from '../../../../shared/Button/Button.shared'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux'
import FlancerEditTagsComponent from '../../../FreeLancer/fLancerProfile/flancerEditAccount/FlancerEditTags/FlancerEditTags.component'
import { Col, Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import UserFeedBackShared from '../../../../shared/UserFeedBack/UserFeedBack.shared';
import { getMessages } from '../../../../core/redux/reducers/Messages/Messages.core';
import { userOfferRequest } from '../../../../core/services/OfferRequestServices/OfferRequest.core';
import { RegisterServices } from '../../../../core/services/AuthServices/Method_RegisterData/Method_RegisterData.core';
import { userOfferPrice } from '../../../../core/services/OfferPriceService/OfferPriceService.core';
import Upload from '../../../../shared/Upload/Upload.shared';
import { getcitiesID, getCountryID, getStateID } from '../../../../core/redux/reducers/RegisterReducer/RegisterLocationID.core';
import { deleteBasicData } from '../../../../core/services/MethodDeleteGlobal/MethodDeleteGlobal.core';
import TextEditorShared from '../../../../shared/TextEditor/TextEditor.shared';


const OfferUpdateFormComponent = ({ taskId }) => {
  // Get Data From Redux Store By UseSelector
  const [offerCategory, getAllUserUpdate, messages] = useSelector((state) => [
    state.coreData.category,
    state.profileUpdate,
    state.messages,
  ]);
  const errMessage = messages[0]?.messages;
  // Variables
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const refe = useRef();
  const inputRef = useRef();
  const backButton = useRef();
  const onLineWorkType = useRef();
  const offLineWorkType = useRef();
  const offerPrice = new FormData();
  const maxCharacters = 50;

  // TODO Get Task Data By ID [START]
  // ?** State To Save Response Data (Realted ==> Get Task By ID <==)
  const [loadTaskData, setTaskData] = useState();
  const [refreshDelete, setRefreshDelete] = useState(false);
  //** Function Call API To get Data
  const advsupdateform = useMemo(() => {
    return userOfferRequest
      ._GET_MyTaskById(taskId)
      .then((res) => {
        setTaskData(res.data.data);
      })
      .catch((err) => {
        return err.response;
      });
  }, [taskId, refreshDelete]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!loadTaskData) {
        return advsupdateform;
      }
    }, 800);
    return () => clearTimeout(timeout);
  }, [loadTaskData, advsupdateform]);
  // TODO Get Advertising Data By ID [END]

  //TODO Get Location Input Value [Country-City-State] [START]
  const [getAllCountryFromResponse, setGetAllCountryFromResponse] = useState();
  const [selectedCountry, setSelectedCountry] = useState(1);
  const [selectedCity, setSelectedCity] = useState(1);
  const [selectedState, setSelectedState] = useState();
  const [selectedCountryName, setSelectedCountryName] = useState();
  const [selectedCityName, setSelectedCityName] = useState();
  const [selectedStateName, setSelectedStateName] = useState();
  const getCoreData = useMemo(() => {
    let modal = ["country", "city", "state"];
    return RegisterServices.GET_RegisterData(
      modal,
      selectedCountry,
      selectedCity
    ).then((res) => {
      setGetAllCountryFromResponse(res.data.data);
    });
  }, [selectedCountry, selectedCity]);
  const fetchCountry = (country) => {
    dispatch(getCountryID(country?.id));
    setSelectedCountry(country.id);
    setSelectedCountryName(country?.name);
  };
  const fetchCities = (city) => {
    setSelectedCity(city.id);
    setSelectedCityName(city.name);
    dispatch(getcitiesID(city?.id));
  };
  const fetchState = (state) => {
    setSelectedState(state.id);
    setSelectedStateName(state.name);
    dispatch(getStateID(state?.id));
  };
  // Function Get Country Lists
  CountrySelect = React.forwardRef(CountrySelect);
  function CountrySelect(isProps = {}, ref) {
    return (
      <Select
        placeholder="البلد"
        ref={refe}
        options={isProps.isProps.location}
        defaultInputValue={
          loadTaskData?.country?.name
            ? loadTaskData?.country?.name
            : isProps.isProps.value
        }
        onChange={fetchCountry}
        getOptionLabel={(country) => country?.name}
        getOptionValue={(country) => country?.id}
      />
    );
  }
  // Function Get City Lists
  CitySelect = React.forwardRef(CitySelect);
  function CitySelect(isProps = {}, ref) {
    return (
      <Select
        placeholder="المنطقة"
        ref={refe}
        options={isProps.isProps.location}
        defaultInputValue={
          selectedCityName ? selectedCityName : loadTaskData?.city?.name
        }
        onChange={fetchCities}
        getOptionLabel={(city) => city?.name}
        getOptionValue={(city) => city?.id}
      />
    );
  }
  // Function Get State Lists
  StateSelect = React.forwardRef(StateSelect);
  function StateSelect(isProps = {}, ref) {
    return (
      <Select
        placeholder="المدينة"
        ref={refe}
        options={isProps.isProps.location}
        defaultInputValue={
          selectedStateName ? selectedStateName : loadTaskData?.state?.name
        }
        onChange={fetchState}
        getOptionLabel={(state) => state?.name}
        getOptionValue={(state) => state?.id}
      />
    );
  }
  useEffect(() => {
    return getCoreData;
  }, [getCoreData]);
  //TODO Get Location Input Value [Country-City-State] [END]

  //TODO Handle Switch Between Type Of Work  [Online Or Offline] [START]
  const handleTypeOfWork = useCallback(() => {
    switch (loadTaskData?.type_work) {
      case "online":
        return (
          onLineWorkType.current.setAttribute("checked", true) &&
          offLineWorkType.current.setAttribute("checked", false)
        );
      case "offline":
        return (
          offLineWorkType.current.click() &&
          onLineWorkType.current.setAttribute("checked", false)
        );
      default:
        return (
          onLineWorkType.current.setAttribute("checked", true) &&
          offLineWorkType.current.setAttribute("checked", true)
        );
    }
  }, [loadTaskData?.type_work]);
  useEffect(() => {
    handleTypeOfWork();
  }, [handleTypeOfWork]);

  //TODO Handle Switch Between Type Of Work  [Online Or Offline] [END]
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    time: "",
    type_work: loadTaskData?.type_work,
    address: "",
  });
  const handleChange = (e) => {
    const { name, value } = e?.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };

  // TODO Function Execute To Definition Files Before Uploading By Choose Or Drag And Drop
  const [newfile, setFiles] = useState({ images: [], videos: [] });
  const [filenames, setNames] = useState([]);
  const fileHandler = (files) => {
    const extention = files;
    for (let allFile of extention) {
      if (allFile.type.match("video/")) {
        newfile.videos.push(allFile);
      } else if (allFile.type.match("image/")) {
        newfile.images.push(allFile);
      }
    }
    const extension = files[0].name.split(".")[1]?.toLowerCase();
    if (extension !== undefined) {
      const fNames = Object.keys(files).map((name) => {
        return {
          name: files[name].name,
          icon: files[name].name.split(".")[1]?.toUpperCase().trim(),
        };
      });
      setNames((prev) => [...prev, fNames].flat());
    } else {
      alert("file type not supported");
    }
  };
  // ================================================[Block Start]================================================ //
  // TODO Function Execute To View Files After Upload At Spacific Place InnerHTML ** [Start] **
  const filePicker = (e) => {
    inputRef.current.click();
    offerPrice.append("images", e.target?.files);
  };
  // TODO Function Execute To View Files After Upload At Spacific Place InnerHTML  ** [End] **
  // ================================================[Block END]================================================ //

  // ================================================[Block Start]================================================ //
  // TODO Function Execute To Remove Upload Files ** [Start] **
  const handleDelete = (e, fileNewName, i) => {
    setRefreshDelete(true);
    if (
      e.nativeEvent.path[4].id === "responseUploadData" ||
      e.nativeEvent.path[5].id === "responseUploadData"
    ) {
      dispatch(
        getMessages({
          messages: "جاري إرســـال طلبك",
          messageType: "warning",
          messageClick: true,
        })
      );
      deleteBasicData
        ._Delete_Data(i)
        .then((res) => {
          dispatch(
            getMessages({
              messages: res.data.message,
              messageType: "success",
              messageClick: true,
            })
          );
        })
        .catch((err) => {
          dispatch(
            getMessages([
              {
                messages: err.response.data.message,
                messageType: "error",
                messageClick: true,
              },
            ])
          );
        });
    }
    const newfileImage = newfile.images.filter(
      (element) => element.name !== fileNewName
    );
    const newfileVideo = newfile.videos.filter(
      (element) => element.name !== fileNewName
    );
    setFiles({ images: newfileImage, videos: newfileVideo });
    setNames((prev) => filenames.filter((each, idx) => idx !== i));
  };
  // TODO Function Execute To Remove Upload Files ** [END] **
  // ================================================[Block END]================================================ //

  const [content, setContent] = useState("");
  const [getDescriptionLength, setGetDescriptionLength] = useState(0);

  // ================================================[Block Start]================================================ //
  // TODO Function Execute To Collect  Task Form Data After Finish To Update It With Our Server ** [Start] **
  const [TaskCheck, setTaskCheck] = useState(false);
  const handleCLick = async (e) => {
    e.preventDefault();
    dispatch(
      getMessages({
        messages: "جاري إرســـال طلبك",
        messageType: "warning",
        messageClick: true,
      })
    );
    setTaskCheck(true);
    // Get Data Like [//TODO ==>  Images - Videos - Name - Description - Time - Type Of Work - Country - City  ]
    newfile.videos?.map((video, idx) => {
      return offerPrice.append(`videos[${idx}]`, video);
    });
    newfile.images?.forEach((image, idx) => {
      return offerPrice.append(`images[${idx}]`, image);
    });
    offerPrice.set("name", formData.name ? formData.name : loadTaskData.name);
    offerPrice.set(
      "description",
      content?.value ? content?.value : loadTaskData.description
    );
    offerPrice.set("time", formData.time ? formData.time : loadTaskData.time);
    offerPrice.set(
      "type_work",
      formData.type_work ? formData.type_work : loadTaskData?.type_work
    );
    offerPrice.set(
      "country_id",
      selectedCountry ? selectedCountry : loadTaskData?.country.id
    );
    offerPrice.set(
      "city_id",
      selectedCity ? selectedCity : loadTaskData?.city.id
    );
    //  If Case ==> The Work Type Offline Get Extra Data Like [//TODO ==> State - Address //]
    if (formData.type_work === "offline") {
      offerPrice.set(
        "address",
        formData.address ? formData.address : loadTaskData.address
      );
      offerPrice.set(
        "state_id",
        selectedState ? selectedState : loadTaskData?.state?.id
      );
    }
    // If Case ==> Check Catgeory If User Update Or Add New Or Not
    if (getAllUserUpdate?.category?.length !== 0) {
      getAllUserUpdate.category.forEach((cate, idx) => {
        offerPrice.append(`category[${idx}]`, cate);
      });
    } else {
      loadTaskData.category.forEach((cate, idx) => {
        offerPrice.append(`category[${idx}]`, cate.id);
      });
    }
    // TODO ==>  Send Our Collect Data To This [API]
    userOfferPrice
      ._UPDATE_TaskByID(loadTaskData?.id, offerPrice)
      .then((res) => {
        setTaskCheck(false);
        dispatch(
          getMessages({
            messages: res.data.message,
            messageType: "success",
            messageClick: true,
          })
        );
        if (res.data.status === 1) {
          const timeTaskOut = setTimeout(() => {
            navigate(`/orders/order-details/${loadTaskData?.id}`);
          }, 800);
          return () => clearTimeout(timeTaskOut);
        }
      })
      .catch((err) => {
        setTaskCheck(false);
        dispatch(
          getMessages([
            {
              messages: err.response.data.message,
              messageType: "error",
              messageClick: true,
            },
          ])
        );
      });
  };
    const handleGoBack = (e) => {
      
    e.preventDefault();
    navigate(-1);
  };
  return (
    <>
      <UserFeedBackShared
        message={messages.messages}
        type={messages?.messageType}
        clickMe={messages?.messageClick}
      />
      {/* LT-Update-request-form [Holder] */}
      <Form
        onSubmit={(e) => handleCLick(e)}
        className="LT-request-form-grid py-4 mt-4 px-4 uLT-f-radius-sB"
      >
        {/* Address Request [Section] */}
        <Row className="mb-3 flex-column m-0">
          <div className="d-flex gap-3 ps-0 ps-md-3 pe-0 mx-0 flex-column flex-md-row">
            <Form.Group
              as={Col}
              sm={12}
              md={12}
              controlId="formGridPassword"
              className="position-relative px-0 d-grid gap-2"
            >
              <Form.Label className="form-label fLT-Bold-sA cLT-main-text m-0">
                {" "}
                عنوان الطلب
              </Form.Label>
              <Form.Control
                defaultValue={
                  loadTaskData?.name !== null
                    ? loadTaskData?.name
                    : formData?.name
                }
                name="name"
                onChange={handleChange}
                className="uLT-bd-f-platinum-sA uLT-f-radius-sB"
                type="text"
                placeholder="علي سبيل المثال , ببناء موقع علي شبكة الانترنت"
              />
              {errMessage?.name && (
                <p
                  className="position-absolute mb-0 fLT-Regular-sA cLT-danger-text pt-2 px-2"
                  style={{ top: "90px" }}
                >
                  {errMessage?.name}
                </p>
              )}
            </Form.Group>
          </div>
        </Row>
        {/* Description Request [Section] */}
        <div className="LT-details-request position-relative">
          <Form.Label className="form-label fLT-Bold-sA cLT-main-text m-0">
            {" "}
            اكتب تفاصيل الطلب
          </Form.Label>
          <TextEditorShared
            setDescription={setContent}
            data={loadTaskData?.description}
            setMaxLength={setGetDescriptionLength}
            characterLength={maxCharacters}
          />
          <div className="text-start w-100 cLT-smoke-text">
            {getDescriptionLength && getDescriptionLength} / {maxCharacters}
          </div>
          {errMessage?.description && (
            <p
              className="position-absolute mb-0 fLT-Regular-sA cLT-danger-text  px-2"
              style={{ bottom: "0px" }}
            >
              {errMessage?.description}
            </p>
          )}
        </div>
        {/* Time And Type Of Work [Section] */}
        <Row className="mb-3 flex-column m-0 pt-3">
          <div className="d-flex gap-3 ps-0 ps-md-3 pe-0 mx-0 flex-column flex-md-row p-0">
            <Form.Group
              as={Col}
              sm={12}
              md={6}
              controlId="formGridTime"
              className="position-relative px-0 d-grid gap-2"
            >
              <Form.Label className="form-label fLT-Bold-sA cLT-main-text m-0">
                مدة الشغل{" "}
                <span className="fLT-Regular-sB cLT-smoke-text">اختياري </span>
              </Form.Label>
              <Form.Control
                defaultValue={
                  loadTaskData?.time ? loadTaskData?.time : formData?.time
                }
                name="time"
                onChange={handleChange}
                className="uLT-bd-f-platinum-sA uLT-f-radius-sB"
                type="text"
                placeholder="30 يوم"
              />
              {errMessage?.time && (
                <p
                  className="position-absolute mb-0 fLT-Regular-sA cLT-danger-text  px-2"
                  style={{ bottom: "-27px" }}
                >
                  {errMessage?.time}
                </p>
              )}
            </Form.Group>
            <Form.Group
              as={Col}
              sm={12}
              md={6}
              controlId="formGridTypeWork"
              className="position-relative px-0 pt-3 pt-md-0 d-grid gap-2"
            >
              <Form.Label className="form-label fLT-Bold-sA cLT-main-text m-0">
                {" "}
                نوع الشغل
              </Form.Label>
              <div
                className="d-flex justify-content-around align-items-center uLT-bd-f-platinum-sA fLT-Regular-sB uLT-f-radius-sB cLT-main-text"
                onChange={handleChange}
              >
                <div className="fLT-Regular-sC  cLT-main-text text-center ">
                  <label id="showCompo" className="uLT-click">
                    <input
                      type="radio"
                      name="type_work"
                      value="online"
                      datatype="anuone"
                      alt="true"
                      ref={onLineWorkType}
                    />
                    <span> عن بعد</span>
                  </label>
                </div>
                <div
                  className=""
                  style={{
                    width: "1px",
                    height: "56px",
                    backgroundColor: "#E9E9E9",
                  }}
                ></div>
                <div className="fLT-Regular-sC  text-center ">
                  <label id="offlineWork" className="uLT-click">
                    <input
                      type="radio"
                      name="type_work"
                      value="offline"
                      datatype="anuone"
                      ref={offLineWorkType}
                      alt="true"
                    />
                    <span> بالحضور </span>
                  </label>
                </div>
              </div>
              {errMessage?.type_work && (
                <p
                  className="position-absolute mb-0 fLT-Regular-sA cLT-danger-text  px-2"
                  style={{ bottom: "-27px" }}
                >
                  {errMessage?.type_work}
                </p>
              )}
            </Form.Group>
          </div>
        </Row>
        {/* Location [Section] */}
        <Row className="d-flex align-items-center">
          <label className="fLT-Regular-sB cLT-support2-text mb-2">موقعك</label>
          <Form.Group as={Col} md={6} className="mb-4 ">
            {/* Country [Option]  */}
            <div
              className={` uLT-bd-f-platinum-sA uLT-f-radius-sB cLT-main-text fLT-Regular-sB LT-edit-account-input`}
            >
              <CountrySelect
                isProps={{
                  value: getAllCountryFromResponse?.country[0]?.name,
                  location: getAllCountryFromResponse?.country,
                }}
                ref={refe}
              />
            </div>
            {/* {!location?.countriesID && messages?.country_id && <p className='mb-0 fLT-Regular-sA cLT-danger-text pt-2 px-2'>{messages?.country_id}</p>} */}
          </Form.Group>
          {/* City [Section] */}
          <Form.Group as={Col} md={6} className="mb-4">
            {/* City [Option]  */}
            <div
              className={` uLT-bd-f-platinum-sA uLT-f-radius-sB cLT-main-text fLT-Regular-sB `}
            >
              <CitySelect
                isProps={{
                  value: getAllCountryFromResponse?.city[0]?.name,
                  location: getAllCountryFromResponse?.city,
                }}
                ref={refe}
              />
            </div>
            {/* {!location?.citiesID && messages?.city_id && <p className='mb-0 fLT-Regular-sA cLT-danger-text pt-2 px-2'>{messages?.city_id}</p>} */}
          </Form.Group>
        </Row>
        {/* State Of Location Show Only Type Of Work === Offline */}
        {formData.type_work === "offline" && (
          <Row>
            {/* State [Section] */}
            <Form.Group as={Col} md={6} className="mb-3">
              <Form.Label className="fLT-Regular-sB cLT-support2-text ">
                {" "}
                المنطقة{" "}
              </Form.Label>
              {/* State [Option]  */}
              <div
                className={` uLT-bd-f-platinum-sA uLT-f-radius-sB cLT-main-text fLT-Regular-sB `}
              >
                <StateSelect
                  isProps={{
                    value: getAllCountryFromResponse?.state[0]?.name,
                    location: getAllCountryFromResponse?.state,
                  }}
                  ref={refe}
                />
              </div>
              {/* {!location?.citiesID && messages?.city_id && <p className='mb-0 fLT-Regular-sA cLT-danger-text pt-2 px-2'>{messages?.city_id}</p>} */}
            </Form.Group>
            <Form.Group as={Col} md={6} className="mb-3">
              <Form.Label className="fLT-Regular-sB cLT-support2-text mb-2">
                العنوان بالتفصيل
              </Form.Label>
              <Form.Control
                onChange={handleChange}
                name="address"
                className="uLT-f-radius-sB uLT-bd-f-platinum-sA cLT-main-text"
                type="text"
                value={
                  formData?.address ? formData?.address : loadTaskData?.address
                }
                placeholder="العنوان بالتفصيل"
              />
            </Form.Group>
          </Row>
        )}
        {/* Upload Files [Holder] */}
        <div className="LT-upload-request">
          <Upload
            inputRef={inputRef}
            isDrop={fileHandler}
            targetClick={filePicker}
            fileArr={filenames}
            handleDelete={handleDelete}
            isHaveData={loadTaskData?.document}
            uploadDescription={`اسحب وافلت أي الصور او مستندات قد تكون مفيدة في شرح موجزك هنا (الحد الاقصي لحجم الملف:25 مبجا بايت)`}
          />
        </div>

        {/* Skills-Grid [Holder] */}
        <div className="LT-skills-request~ d-grid gap-3 pb-4 h-100 position-relative">
          {/* [Title] */}
          <p className="m-0 fLT-Bold-sA cLT-main-text">
            ما هي المهارات <span className="cLT-support1-text">و المجالات</span>{" "}
            المطلوبة؟
          </p>
          <FlancerEditTagsComponent
            tags={offerCategory}
            userProfileTags={loadTaskData?.category}
            tagDescription={`ادخل ما يصل الي 5 مهارات تصف مشروعك علي افضل وجة سيستخدم المشتغلين هذه المهارات للعثوار علي المشاريع التي يهتمون بها و يختبرونها اكثر
                        `}
          />
          {errMessage?.category && (
            <p
              className="position-absolute mb-0 fLT-Regular-sA cLT-danger-text  px-2"
              style={{ bottom: "10px" }}
            >
              {errMessage?.category}
            </p>
          )}
        </div>
        <div className="d-flex align-items-center justify-content-between">
          {/* [Back Button */}
          <div className="d-flex justify-content-end  align-items-left">
            <div className="shadow uLT-f-radius-sB" ref={backButton}>
              <ButtonShare
                onClick={(e) => handleGoBack(e)}
                btnClasses="cLT-secondary-bg py-2 px-4 uLT-f-radius-sB"
                textClasses="px-4 cLT-white-text fLT-Regular-sC"
                innerText=" رجــوع"
              />
            </div>
          </div>

          {/* [Request Button */}
          <div className="d-flex justify-content-end  align-items-left">
            <div className="shadow uLT-f-radius-sB">
              <ButtonShare
                ID={"send"}
                loading={TaskCheck}
                btnClasses="cLT-secondary-bg py-2 px-4 uLT-f-radius-sB"
                textClasses="px-4 cLT-white-text fLT-Regular-sC"
                innerText=" إرسال"
              />
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};

export default OfferUpdateFormComponent
