
/**
 * Copyright by (c) 2TS Group 
 *
 *
 * @file   This file defines the EN locales.
 * @author ADAMO
 * @since  10/15/2018
 */
const menu = {
  favouriteList: 'Favourite List',
  revenuePayment: 'Revenue & Payment',
  menuItemsSold: 'Menu Items Sold',
  discountPromotion: 'Discount & Promotion',
  voidRefund: 'Void & Refund',
  staffProductivity: "Staff's Productivity",
  crmLoyalty: 'CRM & Loyalty'
}

const childMenu = {
  salesSummary: 'Sales summary',
  hourlySales: 'Hourly sales by items',
  voidItems: 'Void items'
}

const en = {
  ...menu,
  ...childMenu
}

export default en;