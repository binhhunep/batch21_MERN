import "./app.scss";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";

import chartBarSelectorRemaining from "./redux/selectors/chartBar/chartBar";
import chartColumnSelectorRemaining from "./redux/selectors/chartColumn/chartColumn";
import profileSelectorRemaining from "./redux/selectors/profile/profile";
import socialBlockSelectorRemaining from "./redux/selectors/socialBlock/socialBlock";
import personSelectorRemaining from "./redux/selectors/person/person";
import shopBlockSelectorRemaining from "./redux/selectors/shopBlock/shopBlock";
import electronicShopSelectorRemaining from "./redux/selectors/electronicShop/electronicShop";
//redux
import chartBarSlice from "./redux/slices/chartBar/chartBarSlice";

import ChartBar1 from "./components/chartBar1";
import Profile from "./components/profile";
import SocialBlock from "./components/socialBlock";
import ChartColumn from "./components/chartColumn";
import Person from "./components/person";
import ShopBlock from "./components/shopBlock";
import EclectronicShop from "./components/electronicShop";
import State from "./components/state";
export default function App() {
  const disPatch = useDispatch();
  // CHARTBAR EVENT
  const [isEditClick, setIsEditClick] = useState(false);
  const [isAddClick, setIsAddClick] = useState(false);
  const [chartBar, setChartBar] = useState({
    title: "",
    titleColor: "",
    percentage: "",
    percentageColor: "",
  });
  const [openModal, setOpenModal] = useState(false);
  const chartBars = useSelector(chartBarSelectorRemaining);

  const addClick = () => {
    setIsAddClick(!isAddClick);
    setOpenModal(!openModal);
    setChartBar({
      title: "OTHERS",
      titleColor: "#5890da",
      percentage: "37",
      percentageColor: "#619cec",
    });
  };

  const editClick = (item) => {
    setOpenModal(!openModal);
    setIsEditClick(!isEditClick);
    setChartBar({
      id: item.id,
      title: item.title,
      titleColor: item.titleColor,
      percentage: item.percentage,
      percentageColor: item.percentageColor,
    });
  };

  const deleteClick = (item) => {
    disPatch(chartBarSlice.actions.delete(item));
  };

  const closeModalClick = () => {
    setOpenModal(!openModal);
    setIsAddClick(false);
    setIsEditClick(false);
  };

  const changeInputModal = (e) => {
    const { name, value } = e.target;
    setChartBar({ ...chartBar, [name]: value });
  };

  const addNewClick = () => {
    if (isAddClick === true) {
      disPatch(chartBarSlice.actions.addChartBar(chartBar));
      setOpenModal(!openModal);
      setIsAddClick(!isAddClick);
    } else if (isEditClick === true) {
      disPatch(chartBarSlice.actions.saveEdit(chartBar));
      console.log(chartBar);
      setOpenModal(!openModal);
      setIsEditClick(!isEditClick);
    } else {
      setOpenModal(!openModal);
    }
  };
  /********************************************/
  // CHART COLUMN
  const chartColumns = useSelector(chartColumnSelectorRemaining);
  /********************************************/
  // PROFILE
  const profiles = useSelector(profileSelectorRemaining);
  /********************************************/
  // SOCIALBLOCK
  const socialBlocks = useSelector(socialBlockSelectorRemaining);
  /********************************************/
  // PERSON
  const persons = useSelector(personSelectorRemaining);
  /********************************************/
  // SHOPBLOCK
  const shopBlocks = useSelector(shopBlockSelectorRemaining);
  /********************************************/
  // ELECTRONIC SHOP
  const electronicShops = useSelector(electronicShopSelectorRemaining);
  /********************************************/
  return (
    <div className="app">
      <div className="app_chartBar1">
        <button className="btn-primary chartBar1_button_add" onClick={addClick}>
          +
        </button>
        <h1>{1}.CHARTBAR</h1>
        {chartBars.map((item) => {
          return (
            <div key={item.id} className="row chartBar1_body">
              <ChartBar1
                title={item.title}
                titleColor={item.titleColor}
                percentage={item.percentage}
                percentageColor={item.percentageColor}
              />
              <div className="col-2 row body_icon">
                <span
                  className=" col-5 text-warning body_icon_edit"
                  onClick={() => editClick(item)}
                >
                  <i className="fas fa-pen" />
                </span>
                <span
                  className="col-5 text-danger body_icon_delete"
                  onClick={() => deleteClick(item)}
                >
                  <i className="fas fa-trash" />
                </span>
              </div>
              <Modal show={openModal} className="modal text-primary body_modal">
                <Modal.Header closeButton onClick={closeModalClick}>
                  <Modal.Title className="text-decoration-underline body_modal_title">
                    {"Add new ChartBar"}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="row">
                    <h6 className="col-4">{"Title:"}</h6>
                    <input
                      name="title"
                      type="text"
                      defaultValue={chartBar.title}
                      className="col-7 modal-input text-secondary h5 border-1 body_modal_input"
                      onChange={(e) => changeInputModal(e)}
                    />
                  </div>
                  <div className="row">
                    <h6 className="col-4">{"TitleColor:"}</h6>
                    <input
                      name="titleColor"
                      type="text"
                      defaultValue={chartBar.titleColor}
                      className="col-7 modal-input text-secondary h5 border-1 body_modal_input"
                      onChange={(e) => changeInputModal(e)}
                    />
                  </div>
                  <div className="row">
                    <h6 className="col-4">{"Percentage:"}</h6>
                    <input
                      name="percentage"
                      type="text"
                      defaultValue={chartBar.percentage}
                      className="col-7 modal-input text-secondary h5 border-1 body_modal_input"
                      onChange={(e) => changeInputModal(e)}
                    />
                  </div>
                  <div className="row">
                    <h6 className="col-4">{"PercentageColor:"}</h6>
                    <input
                      name="percentageColor"
                      type="text"
                      defaultValue={chartBar.percentageColor}
                      className="col-7 modal-input text-secondary h5 border-1 body_modal_input"
                      onChange={(e) => changeInputModal(e)}
                    />
                  </div>
                  <div className="row">
                    <strong className="col-12 text-center text-danger">
                      <i></i>
                    </strong>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={closeModalClick}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={() => addNewClick(item)}>
                    {isAddClick ? "Add new" : "Save change"}
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          );
        })}
      </div>
      <div className="app_profile">
        <h1>{2}.PROFILE</h1>
        <div>
          {profiles.map((item) => {
            return (
              <Profile
                key={item.id}
                name={item.name}
                title={item.title}
                titleColor={item.titleColor}
                followers={item.followers}
              />
            );
          })}
        </div>
      </div>
      <div className="app_socialBlock">
        <h1>{3}.SOCIAL BLOCK</h1>
        <div className="app_socialBlock_body">
          {socialBlocks.map((item) => {
            return (
              <SocialBlock
                key={item.id}
                iconSocial={item.iconSocial}
                colorSocial={item.colorSocial}
                titleSocial={item.titleSocial}
                textSocial={item.textSocial}
              />
            );
          })}
        </div>
      </div>
      <div className="app_chartColumn">
        <h1>{4}.CHART COLUMN</h1>
        <div className="app_chartColumn_body">
          {chartColumns.map((item) => {
            return (
              <ChartColumn
                key={item.id}
                text={item.text}
                total={item.total}
                unit={item.unit}
                percentages={item.percentages}
                date={item.date}
                percentageColor={item.percentageColor}
              />
            );
          })}
        </div>
      </div>
      <div className="app_person">
        <h1>{5}.PERSONS</h1>
        <div className="app_person_body">
          {persons.map((item) => {
            return (
              <Person
                key={item.id}
                imageName={item.imageName}
                name={item.name}
                job={item.job}
                information={item.information}
                contact={item.contact}
              />
            );
          })}
        </div>
      </div>
      <div className="app_shopBlock">
        <h1>{"6.SHOPBLOCK"}</h1>
        <div className="app_shopBlock_body">
          {shopBlocks.map((item) => {
            return (
              <ShopBlock
                key={item.id}
                productImage={item.productImage}
                productName={item.productName}
                productInfor={item.productInfor}
                productSize={item.productSize}
                productPrices={item.productPrices}
                discount={item.discount}
                unit={item.unit}
              />
            );
          })}
        </div>
      </div>
      <div className="app_electronicShop">
        <h1>{"7.ELECTRONIC SHOP"}</h1>
        <div className="app_electronicShop_header">
          <div className="header_left">
            <div className="header_left_title">{"Deal of the day"}</div>
            <div className="header_left_dealTime">
              {"End in:"}&emsp;{"6:17:17:39"}
            </div>
          </div>
          <div className="header_right">View all</div>
        </div>
        <div className="app_electronicShop_body">
          {electronicShops.map((item) => {
            return (
              <EclectronicShop
                key={item.id}
                productImage={item.productImage}
                productName={item.productName}
                productInfor={item.productInfor}
                productPrices={item.productPrices}
                saleOff={item.saleOff}
                discount={item.discount}
                starColorOn={item.starColorOn}
                starColorOff={item.starColorOff}
                percentage={item.percentage}
                productSold={item.productSold}
              />
            );
          })}
        </div>
      </div>
      <div className="app_state">
        <h1>{"8.STATE"}</h1>
        <State />
      </div>
    </div>
  );
}
