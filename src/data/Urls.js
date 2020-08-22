import { DataTypes } from "./Types";

const protocol = "http";
const hostname = "localhost";
const hostname1 = "xuxiyao.com"
const port = 3500;

export const RestUrls = {
    [DataTypes.PRODUCTS]: `${protocol}://${hostname}:${port}/api/products`,
    [DataTypes.ORDERS]: `${protocol}://${hostname}:${port}/api/orders`,
    [DataTypes.ITEMS]: `${protocol}://${hostname}:${port}/json/indexjson`,
    [DataTypes.IDIOMS]: `${protocol}://${hostname}:3000/idiomsjson`,
    [DataTypes.ENIDIOMS]: `${protocol}://${hostname}:3000/enidiomsjson`,
    }
//
