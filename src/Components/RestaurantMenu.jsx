import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Cartcontext, Coordinates } from "../context/context";
import { useDispatch, useSelector } from "react-redux";
import { addtocart, clearcart } from "../Utility/cartslice";
import toast from "react-hot-toast";

function RestaurantMenu() {
    const [val,setval]=useState(0);
    const [menudata,setMenudata]=useState([]);
    const {coord : {lat,lng}}=useContext(Coordinates);
    console.log(lat,lng)

    const [resinfo,setresinfo]=useState([])
    // console.log(resinfo)

    const [discountdata,setdiscountdata]=useState([]);
    console.log(discountdata)
    const { id } = useParams();
    let mainid=id.split("rest").at(-1);
    console.log(mainid)

    async function fetchresdata()
    {
      const data=await fetch(`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${mainid}&submitAction=ENTER`)
      const res= await data.json()
      setresinfo(res?.data?.cards[2]?.card?.card?.info);
      setdiscountdata(res?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers)
      let actualdata=(fetchData[0]?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards).filter(data=> data?.card?.card?.itemCards || data?.card?.card?.categories);
      // console.log(actualdata);
      setMenudata(actualdata);
    }


    useEffect(()=>{
      fetchresdata()
    },[])

    
    const fetchData=[
    {
  "statusCode": 0,
  "data": {
    "statusMessage": "done successfully",
    "cards": [
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
            "text": "Mer Konfekt",
            "headerStyling": {
              "textColor": "text_Highest_Emphasis",
              "textVariant": "header_H3_Black"
            }
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.RestaurantBlTab",
            "tabs": [
              {
                "id": "Order Online",
                "title": "Order Online"
              }
            ]
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "313246",
              "name": "Mer Konfekt",
              "city": "Mumbai",
              "slugs": {
                "restaurant": "mer-konfekt-fort-area-fort-area",
                "city": "mumbai"
              },
              "uniqueId": "e51e6528-4859-48c8-8fed-e84c17dc2d76",
              "cloudinaryImageId": "db0fda02429cb7b65a06afb2d7019570",
              "locality": "Breach Candy",
              "areaName": "Mahalaxmi",
              "costForTwo": "40000",
              "costForTwoMessage": "₹400 for two",
              "cuisines": [
                "Desserts",
                "Bakery"
              ],
              "avgRating": 4.8,
              "veg": true,
              "feeDetails": {
                "restaurantId": "313246",
                "fees": [
                  {

                  }
                ]
              },
              "parentId": "11221",
              "avgRatingString": "4.8",
              "totalRatingsString": "8.6K+ ratings",
              "sla": {
                "restaurantId": "313246",
                "deliveryTime": 29,
                "minDeliveryTime": 25,
                "maxDeliveryTime": 30,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "stressFactor": 1,
                "rainMode": "RAIN_MODE_NONE",
                "longDistance": "LONG_DISTANCE_NOT_LONG_DISTANCE",
                "zoneId": 79,
                "slaString": "25-30 MINS",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2025-10-10 19:30:00",
                "visibility": true,
                "opened": true,
                "restaurantClosedMeta": {

                }
              },
              "aggregatedDiscountInfo": {
                "header": "10% off",
                "shortDescriptionList": [
                  {
                    "meta": "10% off | Use PARTY",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  },
                  {
                    "meta": "Freedel",
                    "discountType": "FREE_DELIVERY",
                    "operationType": "RESTAURANT"
                  }
                ],
                "descriptionList": [
                  {
                    "meta": "10% off | Use code PARTY",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  },
                  {
                    "meta": "Freedel",
                    "discountType": "FREE_DELIVERY",
                    "operationType": "RESTAURANT"
                  }
                ],
                "visible": true
              },
              "badges": {

              },
              "slugString": "mer-konfekt-fort-area-fort-area",
              "multiOutlet": true,
              "isOpen": true,
              "labels": [
                {
                  "title": "Timings",
                  "message": "null"
                },
                {
                  "title": "Address",
                  "message": "G3, Shankar Mahal, Cumbala Hill, Mumbai, Maharashtra - 400026"
                },
                {
                  "title": "Cuisines",
                  "message": "Desserts,Bakery"
                }
              ],
              "logo": "v1660803984/Gourmet_Mumbai/Logos_18.8.22/Mer_Konfekt.png",
              "totalRatings": 8600,
              "aggregatedDiscountInfoV2": {
                "header": "10% off",
                "shortDescriptionList": [
                  {
                    "meta": "10% off | Use PARTY",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  },
                  {
                    "meta": "Freedel",
                    "discountType": "FREE_DELIVERY",
                    "operationType": "RESTAURANT"
                  }
                ],
                "descriptionList": [
                  {
                    "meta": "10% off | Use code PARTY",
                    "discountType": "Percentage",
                    "operationType": "RESTAURANT"
                  },
                  {
                    "meta": "Freedel",
                    "discountType": "FREE_DELIVERY",
                    "operationType": "RESTAURANT"
                  }
                ],
                "couponDetailsCta": "View coupon details"
              },
              "type": "F",
              "nudgeBanners": [
                {
                  "minValue": 630,
                  "maxValue": 900,
                  "priority": 1,
                  "couponCode": "PARTY",
                  "discountInfo": {
                    "discountType": "Percentage",
                    "value": 10
                  },
                  "lockedMessage": "Add items worth ₹\u003Camount\u003E to unlock flat 10% off | Code PARTY",
                  "unlockedMessage": "PARTY Coupon Unlocked! Use it to save flat 10% off",
                  "logoCtx": {

                  }
                }
              ],
              "headerBanner": {
                "url": "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/313246"
              },
              "generalPurposeInfoListV2": [
                {
                  "cta": {
                    "info": {
                      "recordings": {

                      }
                    },
                    "linkCta": {

                    }
                  }
                }
              ],
              "loyaltyDiscoverPresentationInfo": {
                "logoCtx": {
                  "logo": "v1634558776/swiggy_one/OneLogo_3x.png"
                },
                "freedelMessage": "Free delivery on orders above ₹99"
              },
              "ratingSlab": "RATING_SLAB_5",
              "restaurantCategory": "RESTAURANT_CATEGORY_GOURMET",
              "backgroundImage": "v1660805018/Gourmet_Mumbai/Menu%20headers_18.8.22/Mer_Konfekt.png",
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "hasBestsellerItems": true,
              "hasGuiltfreeItems": true,
              "cartOrderabilityNudgeBanner": {
                "parameters": {

                },
                "presentation": {

                }
              },
              "latLong": "18.9714328,72.8061506",
              "backgroundImageOverlayInfo": {

              },
              "featuredSectionInfo": {

              },
              "dishStyle": {
                "socialMarkerStyle": [
                  {
                    "socialMarkerType": "SOCIAL_MARKER_TYPE_HIGH_PROTEIN",
                    "title": "Protein Rich",
                    "textStyle": "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                    "textColor": "highlight"
                  },
                  {
                    "socialMarkerType": "SOCIAL_MARKER_TYPE_BESTSELLER",
                    "title": "Bestseller",
                    "textStyle": "FONT_NAME_V2_BODY3_NEUTRAL_BOLD",
                    "textColor": "color_swiggy_one"
                  }
                ]
              }
            },
            "analytics": {

            }
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD",
            "sectionId": "POP_UP_CROUTON_MENU"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            "layout": {
              "rows": 1,
              "columns": 4,
              "horizontalScrollEnabled": true,
              "itemSpacing": 12,
              "lineSpacing": 10,
              "widgetPadding": {

              },
              "containerStyle": {
                "containerPadding": {
                  "left": 10,
                  "right": 10,
                  "bottom": 16
                }
              }
            },
            "id": "offerCollectionWidget_UX4",
            "gridElements": {
              "infoWithStyle": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
                "offers": [
                  {
                    "info": {
                      "header": "Extra ₹15 off",
                      "offerTagColor": "#E46D47",
                      "logoBottom": "rng/md/ads/production/d07196b25b85d1fd9951e10c255ab737",
                      "offerIds": [
                        "b30b4320-1610-4389-9861-f54e8a6476b3"
                      ],
                      "expiryTime": "1970-01-01T00:00:00Z",
                      "description": "APPLICABLE OVER & ABOVE COUPONS",
                      "offerType": "offers",
                      "restId": "313246",
                      "offerLogo": "rng/md/ads/production/d07196b25b85d1fd9951e10c255ab737",
                      "descriptionTextColor": "#7302060C"
                    },
                    "cta": {
                      "type": "OFFER_HALF_CARD"
                    }
                  },
                  {
                    "info": {
                      "header": "FLAT 10% OFF",
                      "offerTag": "FLAT DEAL",
                      "offerTagColor": "#E46D47",
                      "offerIds": [
                        "a934b2dc-52f7-4ebd-9bb4-a5244ac4cd5f"
                      ],
                      "expiryTime": "1970-01-01T00:00:00Z",
                      "couponCode": "USE PARTY",
                      "description": "ABOVE ₹900",
                      "offerType": "offers",
                      "restId": "313246",
                      "offerLogo": "offers/generic",
                      "descriptionTextColor": "#7302060C",
                      "primaryDescription": "USE PARTY"
                    },
                    "cta": {
                      "type": "OFFER_HALF_CARD"
                    }
                  },
                  {
                    "info": {
                      "header": "10% OFF UPTO ₹100",
                      "offerTagColor": "#E46D47",
                      "logoBottom": "MARKETING_BANNERS/IMAGES/OFFERS/2025/8/20/c812c78a-7809-4ffa-9eea-59482c5bac46_RuPay.png",
                      "offerIds": [
                        "aad6b5b0-cd9c-4e28-b967-f72aae66b6f3"
                      ],
                      "expiryTime": "1970-01-01T00:00:00Z",
                      "couponCode": "USE RUPAYCC100",
                      "description": "ABOVE ₹600",
                      "offerType": "offers",
                      "restId": "313246",
                      "offerLogo": "MARKETING_BANNERS/IMAGES/OFFERS/2025/8/20/c812c78a-7809-4ffa-9eea-59482c5bac46_RuPay.png",
                      "descriptionTextColor": "#7302060C",
                      "primaryDescription": "USE RUPAYCC100"
                    },
                    "cta": {
                      "type": "OFFER_HALF_CARD"
                    }
                  },
                  {
                    "info": {
                      "header": "10% OFF UPTO ₹100",
                      "offerTagColor": "#E46D47",
                      "logoBottom": "MARKETING_BANNERS/IMAGES/OFFERS/2025/10/2/c15b8c81-db7f-4c22-91f2-0f078e5ba6ba_HSBC.png",
                      "offerIds": [
                        "82bcf539-ad39-4608-8d5c-f63728826391"
                      ],
                      "expiryTime": "1970-01-01T00:00:00Z",
                      "couponCode": "USE HSBC100",
                      "description": "ABOVE ₹699",
                      "offerType": "offers",
                      "restId": "313246",
                      "offerLogo": "MARKETING_BANNERS/IMAGES/OFFERS/2025/10/2/c15b8c81-db7f-4c22-91f2-0f078e5ba6ba_HSBC.png",
                      "descriptionTextColor": "#7302060C",
                      "primaryDescription": "USE HSBC100"
                    },
                    "cta": {
                      "type": "OFFER_HALF_CARD"
                    }
                  }
                ],
                "habitMilestoneInfo": {
                  "callout": {

                  }
                },
                "loyaltyDiscoverPresentationInfo": {
                  "logoCtx": {

                  }
                }
              }
            }
          }
        }
      },
      {
        "groupedCard": {
          "cardGroupMap": {
            "REGULAR": {
              "cards": [
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                      "isPureVeg": true,
                      "badges": {

                      },
                      "vegOnlyDetails": {
                        "imageId": "AutoVegOnly_qkjowj",
                        "title": "Showing only vegetarian options.",
                        "description": "Tap on the VEG ONLY button to turn off the setting"
                      },
                      "topRatedFilter": {
                        "attributes": {
                          "displayText": "Ratings 4.0+"
                        }
                      },
                      "kidsCategoryFilter": {
                        "attributes": {
                          "displayText": "Kids Favourites",
                          "tooltip": {
                            "enabled": true,
                            "displayText": "Kids Favourites Filter applied. Remove this filter to see the full Menu."
                          }
                        }
                      },
                      "vegFilter": {
                        "attributes": {
                          "displayText": "VEG"
                        }
                      },
                      "nonvegFilter": {
                        "attributes": {
                          "displayText": "NONVEG"
                        }
                      }
                    },
                    "relevance": {
                      "type": "RELEVANCE_TYPE_ON_MENU_FILTER_TOGGLED",
                      "sectionId": "MENU_FILTER_TOGGLE"
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Millet Breads (vegan)",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "82916823",
                              "name": "Bajra Rajgira Bread (400gms)",
                              "category": "Millet Breads (vegan)",
                              "description": "High Fiber|Sesame Seeds|Vegan|No Preservatives",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/3b60f8c8-eff4-4f07-8c62-adfd5a95ec4b_80099f4a-95de-4e2c-a8bf-05ef756dc15e.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 15000,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542421",
                                  "groupName": "Addons",
                                  "choices": [
                                    {
                                      "id": "132100030",
                                      "name": "Jain Peri-peri Cheese Crackers (zero Maida) (100gms)",
                                      "price": 15600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100020",
                                      "name": "Makai Jowar Jeera Lemon Nachos (zero Maida) (100gms)",
                                      "price": 14300,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100022",
                                      "name": "Chocolate Chip (wholewheat) (150gms)",
                                      "price": 16900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100009",
                                      "name": "Fresh Salsa (jain)",
                                      "price": 28600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100014",
                                      "name": "Creamy Almond (unsweetened)",
                                      "price": 23700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100029",
                                      "name": "Crunchy Peanut (unsweetened)",
                                      "price": 11800,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100018",
                                      "name": "Choco-shots (bubblegum)",
                                      "price": 10600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100032",
                                      "name": "Bajra Rajgira Parsley Lavash (zero Maida) (100gms)",
                                      "price": 14300,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100006",
                                      "name": "Pain Au Chocolat",
                                      "price": 16900,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100025",
                                      "name": "Hazelnut Chocolate",
                                      "price": 29200,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 10,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "isBestseller": true,
                              "isGuiltfree": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "671 ratings",
                                  "ratingCountV2": "671"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "36886431"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "113794553",
                              "name": "Jowar Shingoda Olive Bread (400gms)",
                              "category": "Millet Breads (vegan)",
                              "description": "Olives|Sesame Seeds|Vegan|No Preservatives",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/02deedfd-71ca-4f9a-9884-eda393332b9d_b2faa526-d675-42d8-bf74-60d27786df64.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 16500,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542447",
                                  "groupName": "Addons",
                                  "choices": [
                                    {
                                      "id": "132100030",
                                      "name": "Jain Peri-peri Cheese Crackers (zero Maida) (100gms)",
                                      "price": 15600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100020",
                                      "name": "Makai Jowar Jeera Lemon Nachos (zero Maida) (100gms)",
                                      "price": 14300,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100022",
                                      "name": "Chocolate Chip (wholewheat) (150gms)",
                                      "price": 16900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100009",
                                      "name": "Fresh Salsa (jain)",
                                      "price": 28600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100014",
                                      "name": "Creamy Almond (unsweetened)",
                                      "price": 23700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100029",
                                      "name": "Crunchy Peanut (unsweetened)",
                                      "price": 11800,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100018",
                                      "name": "Choco-shots (bubblegum)",
                                      "price": 10600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100032",
                                      "name": "Bajra Rajgira Parsley Lavash (zero Maida) (100gms)",
                                      "price": 14300,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100006",
                                      "name": "Pain Au Chocolat",
                                      "price": 16900,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100025",
                                      "name": "Hazelnut Chocolate",
                                      "price": 29200,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 10,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "410 ratings",
                                  "ratingCountV2": "410"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "36886447"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ],
                      "subtitleSuffix": {

                      },
                      "image": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/3b60f8c8-eff4-4f07-8c62-adfd5a95ec4b_80099f4a-95de-4e2c-a8bf-05ef756dc15e.jpg",
                      "categoryId": "46597306"
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Protein Breads (vegan)",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "157575854",
                              "name": "Jowar Rice Bread (300 Gms)",
                              "category": "Protein Breads (vegan)",
                              "description": "Relish the goodness of our Jowar Rice Loaf – naturally fermented for a perfect texture and full flavour, without compromising on taste or nutrition. A wholesome choice for everyone to enjoy",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/4a406afd-7758-40e9-b903-19df0d000c78_a0a3a1b3-fbd6-426b-9416-08abbeffd859.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 24900,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.6",
                                  "ratingCount": "12 ratings",
                                  "ratingCountV2": "12"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "94253709"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "157575855",
                              "name": "Khapli Wholewheat Bread (300 Gms)",
                              "category": "Protein Breads (vegan)",
                              "description": "Enjoy this sandwich bread  that is high in protein & high in fiber . Soft, wholesome, and perfect for balanced, healthy meals every day",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/65e13569-b04b-47cf-8779-45467d4188ed_9cdf25b6-5aca-4161-b15a-91148bfd4561.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 9900,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.9",
                                  "ratingCount": "61 ratings",
                                  "ratingCountV2": "61"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "94253715"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "136477574",
                              "name": "Sprouted Moong Herb Bread (400gms)",
                              "category": "Protein Breads (vegan)",
                              "description": "44gms of Protein Per Loaf|Vegan|No Preservatives",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/435a386a-7c3a-4d8c-aaa0-8dfb6fa7fc2e_a605901f-848d-4487-90a8-c11eda80b04e.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 16500,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "189 ratings",
                                  "ratingCountV2": "189"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "2024083"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ],
                      "subtitleSuffix": {

                      },
                      "image": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/4a406afd-7758-40e9-b903-19df0d000c78_a0a3a1b3-fbd6-426b-9416-08abbeffd859.jpg",
                      "categoryId": "46597307"
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Zero Maida Breads",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "157575856",
                              "name": "Bombay Methia Masala Pav (zero Maida)",
                              "category": "Zero Maida Breads",
                              "description": "Pack Of 4",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/fafb65d1-16c2-498f-a5e7-6b27db855dbe_a9dec9aa-600e-4e17-831b-d4cb205f0a22.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 15000,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542538",
                                  "groupName": "Addons",
                                  "choices": [
                                    {
                                      "id": "132100030",
                                      "name": "Jain Peri-peri Cheese Crackers (zero Maida) (100gms)",
                                      "price": 15600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100020",
                                      "name": "Makai Jowar Jeera Lemon Nachos (zero Maida) (100gms)",
                                      "price": 14300,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100022",
                                      "name": "Chocolate Chip (wholewheat) (150gms)",
                                      "price": 16900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100009",
                                      "name": "Fresh Salsa (jain)",
                                      "price": 28600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100014",
                                      "name": "Creamy Almond (unsweetened)",
                                      "price": 23700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100029",
                                      "name": "Crunchy Peanut (unsweetened)",
                                      "price": 11800,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100018",
                                      "name": "Choco-shots (bubblegum)",
                                      "price": 10600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100032",
                                      "name": "Bajra Rajgira Parsley Lavash (zero Maida) (100gms)",
                                      "price": 14300,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100006",
                                      "name": "Pain Au Chocolat",
                                      "price": 16900,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100025",
                                      "name": "Hazelnut Chocolate",
                                      "price": 29200,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 10,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "5.0",
                                  "ratingCount": "20 ratings",
                                  "ratingCountV2": "20"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "94253700"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "157575857",
                              "name": "Jowar Beetroot Wraps (zero Maida)",
                              "category": "Zero Maida Breads",
                              "description": "Jowar & Wholewheat| Pack of 4| The heart of Mexican cuisine, perfect for burritos, tacos, and quesadillas!",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/5/9bc51787-4330-4a31-8dd4-a46af2fafcc4_7aa66457-7b4c-43a7-a71f-7fd1101b6495.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 20000,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542437",
                                  "groupName": "Addons",
                                  "choices": [
                                    {
                                      "id": "132100030",
                                      "name": "Jain Peri-peri Cheese Crackers (zero Maida) (100gms)",
                                      "price": 15600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100020",
                                      "name": "Makai Jowar Jeera Lemon Nachos (zero Maida) (100gms)",
                                      "price": 14300,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100022",
                                      "name": "Chocolate Chip (wholewheat) (150gms)",
                                      "price": 16900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100009",
                                      "name": "Fresh Salsa (jain)",
                                      "price": 28600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100014",
                                      "name": "Creamy Almond (unsweetened)",
                                      "price": 23700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100029",
                                      "name": "Crunchy Peanut (unsweetened)",
                                      "price": 11800,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100018",
                                      "name": "Choco-shots (bubblegum)",
                                      "price": 10600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100032",
                                      "name": "Bajra Rajgira Parsley Lavash (zero Maida) (100gms)",
                                      "price": 14300,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100006",
                                      "name": "Pain Au Chocolat",
                                      "price": 16900,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100025",
                                      "name": "Hazelnut Chocolate",
                                      "price": 29200,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 10,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.4",
                                  "ratingCount": "13 ratings",
                                  "ratingCountV2": "13"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "94253702"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "157575859",
                              "name": "Jowar Rajgira Kulcha (zero Maida)",
                              "category": "Zero Maida Breads",
                              "description": "Pack Of 4| Delicious Millet & Wholewheat Kulchas",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/6e82be94-ccbb-4d53-a6de-4ff660d16bd4_f7f403ff-2fe6-4b72-8db8-03effabc3a09.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 14200,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542509",
                                  "groupName": "Addons",
                                  "choices": [
                                    {
                                      "id": "132100030",
                                      "name": "Jain Peri-peri Cheese Crackers (zero Maida) (100gms)",
                                      "price": 15600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100020",
                                      "name": "Makai Jowar Jeera Lemon Nachos (zero Maida) (100gms)",
                                      "price": 14300,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100022",
                                      "name": "Chocolate Chip (wholewheat) (150gms)",
                                      "price": 16900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100009",
                                      "name": "Fresh Salsa (jain)",
                                      "price": 28600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100014",
                                      "name": "Creamy Almond (unsweetened)",
                                      "price": 23700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100029",
                                      "name": "Crunchy Peanut (unsweetened)",
                                      "price": 11800,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100018",
                                      "name": "Choco-shots (bubblegum)",
                                      "price": 10600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100032",
                                      "name": "Bajra Rajgira Parsley Lavash (zero Maida) (100gms)",
                                      "price": 14300,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100006",
                                      "name": "Pain Au Chocolat",
                                      "price": 16900,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100025",
                                      "name": "Hazelnut Chocolate",
                                      "price": 29200,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 10,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.9",
                                  "ratingCount": "35 ratings",
                                  "ratingCountV2": "35"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "94253708"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "157575860",
                              "name": "Jowar Spinach Wraps (zero Maida)",
                              "category": "Zero Maida Breads",
                              "description": "Jowar & Wholewheat| Pack of 4| The heart of Mexican cuisine, perfect for burritos, tacos, and quesadillas!",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 20000,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542536",
                                  "groupName": "Addons",
                                  "choices": [
                                    {
                                      "id": "132100030",
                                      "name": "Jain Peri-peri Cheese Crackers (zero Maida) (100gms)",
                                      "price": 15600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100020",
                                      "name": "Makai Jowar Jeera Lemon Nachos (zero Maida) (100gms)",
                                      "price": 14300,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100022",
                                      "name": "Chocolate Chip (wholewheat) (150gms)",
                                      "price": 16900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100009",
                                      "name": "Fresh Salsa (jain)",
                                      "price": 28600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100014",
                                      "name": "Creamy Almond (unsweetened)",
                                      "price": 23700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100029",
                                      "name": "Crunchy Peanut (unsweetened)",
                                      "price": 11800,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100018",
                                      "name": "Choco-shots (bubblegum)",
                                      "price": 10600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100032",
                                      "name": "Bajra Rajgira Parsley Lavash (zero Maida) (100gms)",
                                      "price": 14300,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100006",
                                      "name": "Pain Au Chocolat",
                                      "price": 16900,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100025",
                                      "name": "Hazelnut Chocolate",
                                      "price": 29200,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 10,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "5.0",
                                  "ratingCount": "4 ratings",
                                  "ratingCountV2": "4"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "94253710"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "157575861",
                              "name": "Jowar Wholewheat Wraps (zero Maida)",
                              "category": "Zero Maida Breads",
                              "description": "Jowar & Wholewheat| Pack of 4| The heart of Mexican cuisine, perfect for burritos, tacos, and quesadillas!",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/b2472424-38b7-4495-96ba-ffbcda014e7a_1b7c58a5-9d5a-4b32-a4d8-c0e4c52eea43.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 20000,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542582",
                                  "groupName": "Addons",
                                  "choices": [
                                    {
                                      "id": "132100030",
                                      "name": "Jain Peri-peri Cheese Crackers (zero Maida) (100gms)",
                                      "price": 15600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100020",
                                      "name": "Makai Jowar Jeera Lemon Nachos (zero Maida) (100gms)",
                                      "price": 14300,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100022",
                                      "name": "Chocolate Chip (wholewheat) (150gms)",
                                      "price": 16900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100009",
                                      "name": "Fresh Salsa (jain)",
                                      "price": 28600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100014",
                                      "name": "Creamy Almond (unsweetened)",
                                      "price": 23700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100029",
                                      "name": "Crunchy Peanut (unsweetened)",
                                      "price": 11800,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100018",
                                      "name": "Choco-shots (bubblegum)",
                                      "price": 10600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100032",
                                      "name": "Bajra Rajgira Parsley Lavash (zero Maida) (100gms)",
                                      "price": 14300,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100006",
                                      "name": "Pain Au Chocolat",
                                      "price": 16900,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100025",
                                      "name": "Hazelnut Chocolate",
                                      "price": 29200,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 10,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "9 ratings",
                                  "ratingCountV2": "9"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "100149630"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "136477575",
                              "name": "Nachni Wholewheat Bread (zero Maida)",
                              "category": "Zero Maida Breads",
                              "description": "Enjoy this sandwich bread  that is high in protein & high in fiber . Soft, wholesome, and perfect for balanced, healthy meals every day",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/24/0219fa15-aeb7-405c-8fad-f587bceb1777_d3f95bd5-67ca-42c4-b471-ac3e639c6777.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 11000,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542556",
                                  "groupName": "Addons",
                                  "choices": [
                                    {
                                      "id": "132100030",
                                      "name": "Jain Peri-peri Cheese Crackers (zero Maida) (100gms)",
                                      "price": 15600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100020",
                                      "name": "Makai Jowar Jeera Lemon Nachos (zero Maida) (100gms)",
                                      "price": 14300,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100022",
                                      "name": "Chocolate Chip (wholewheat) (150gms)",
                                      "price": 16900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100009",
                                      "name": "Fresh Salsa (jain)",
                                      "price": 28600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100014",
                                      "name": "Creamy Almond (unsweetened)",
                                      "price": 23700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100029",
                                      "name": "Crunchy Peanut (unsweetened)",
                                      "price": 11800,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100018",
                                      "name": "Choco-shots (bubblegum)",
                                      "price": 10600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100032",
                                      "name": "Bajra Rajgira Parsley Lavash (zero Maida) (100gms)",
                                      "price": 14300,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100006",
                                      "name": "Pain Au Chocolat",
                                      "price": 16900,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100025",
                                      "name": "Hazelnut Chocolate",
                                      "price": 29200,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 10,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "38 ratings",
                                  "ratingCountV2": "38"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "95543598"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "136477576",
                              "name": "Khapli Wholewheat Bread (300gms)",
                              "category": "Zero Maida Breads",
                              "description": "Enjoy this sandwich bread  that is high in protein & high in fiber . Soft, wholesome, and perfect for balanced, healthy meals every day",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/24/4b80fd08-f4a9-4c48-abfc-30f675e6ef87_f8fed79d-a2f7-4943-8090-bccf532c9a8f.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 9900,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542548",
                                  "groupName": "Addons",
                                  "choices": [
                                    {
                                      "id": "132100030",
                                      "name": "Jain Peri-peri Cheese Crackers (zero Maida) (100gms)",
                                      "price": 15600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100020",
                                      "name": "Makai Jowar Jeera Lemon Nachos (zero Maida) (100gms)",
                                      "price": 14300,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100022",
                                      "name": "Chocolate Chip (wholewheat) (150gms)",
                                      "price": 16900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100009",
                                      "name": "Fresh Salsa (jain)",
                                      "price": 28600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100014",
                                      "name": "Creamy Almond (unsweetened)",
                                      "price": 23700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100029",
                                      "name": "Crunchy Peanut (unsweetened)",
                                      "price": 11800,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100018",
                                      "name": "Choco-shots (bubblegum)",
                                      "price": 10600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100032",
                                      "name": "Bajra Rajgira Parsley Lavash (zero Maida) (100gms)",
                                      "price": 14300,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100006",
                                      "name": "Pain Au Chocolat",
                                      "price": 16900,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100025",
                                      "name": "Hazelnut Chocolate",
                                      "price": 29200,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 10,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.9",
                                  "ratingCount": "61 ratings",
                                  "ratingCountV2": "61"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "94253715"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "136477577",
                              "name": "Foxtail Millet Bread (300gms)",
                              "category": "Zero Maida Breads",
                              "description": "Enjoy this sandwich bread  that is low in sugar, high in fiber, and a good source of protein. Soft, wholesome, and perfect for balanced, healthy meals every day",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/919d68e9-7941-4ff1-bd44-4b7b17182cfa_cdb526c7-4984-4eae-8446-9c86d218d693.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 15000,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542518",
                                  "groupName": "Addons",
                                  "choices": [
                                    {
                                      "id": "132100030",
                                      "name": "Jain Peri-peri Cheese Crackers (zero Maida) (100gms)",
                                      "price": 15600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100020",
                                      "name": "Makai Jowar Jeera Lemon Nachos (zero Maida) (100gms)",
                                      "price": 14300,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100022",
                                      "name": "Chocolate Chip (wholewheat) (150gms)",
                                      "price": 16900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100009",
                                      "name": "Fresh Salsa (jain)",
                                      "price": 28600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100014",
                                      "name": "Creamy Almond (unsweetened)",
                                      "price": 23700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100029",
                                      "name": "Crunchy Peanut (unsweetened)",
                                      "price": 11800,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100018",
                                      "name": "Choco-shots (bubblegum)",
                                      "price": 10600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100032",
                                      "name": "Bajra Rajgira Parsley Lavash (zero Maida) (100gms)",
                                      "price": 14300,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100006",
                                      "name": "Pain Au Chocolat",
                                      "price": 16900,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100025",
                                      "name": "Hazelnut Chocolate",
                                      "price": 29200,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 10,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "62 ratings",
                                  "ratingCountV2": "62"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "94253701"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "136477579",
                              "name": "Wholewheat Pizza Base (zero Maida)",
                              "category": "Zero Maida Breads",
                              "description": "Pack of 2",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/d1d12e75-9e98-4114-b408-be7973860df6_00a38434-a748-4a1c-a056-959c9402d962.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 15000,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542479",
                                  "groupName": "Addons",
                                  "choices": [
                                    {
                                      "id": "132100030",
                                      "name": "Jain Peri-peri Cheese Crackers (zero Maida) (100gms)",
                                      "price": 15600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100020",
                                      "name": "Makai Jowar Jeera Lemon Nachos (zero Maida) (100gms)",
                                      "price": 14300,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100022",
                                      "name": "Chocolate Chip (wholewheat) (150gms)",
                                      "price": 16900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100009",
                                      "name": "Fresh Salsa (jain)",
                                      "price": 28600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100014",
                                      "name": "Creamy Almond (unsweetened)",
                                      "price": 23700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100029",
                                      "name": "Crunchy Peanut (unsweetened)",
                                      "price": 11800,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100018",
                                      "name": "Choco-shots (bubblegum)",
                                      "price": 10600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100032",
                                      "name": "Bajra Rajgira Parsley Lavash (zero Maida) (100gms)",
                                      "price": 14300,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100006",
                                      "name": "Pain Au Chocolat",
                                      "price": 16900,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100025",
                                      "name": "Hazelnut Chocolate",
                                      "price": 29200,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 10,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "199524472",
                                  "groupName": "Extra Add",
                                  "choices": [
                                    {
                                      "id": "133405526",
                                      "name": "Hazelnut Mousse",
                                      "price": 16525,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "133405531",
                                      "name": "Assorted Brownie Box - Pack Of 4",
                                      "price": 42288,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "133405527",
                                      "name": "Brookies Box - Pack Of 2",
                                      "price": 29661,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "133405530",
                                      "name": "Glutenfree Almond Cupcake- Pack Of 6",
                                      "price": 25339,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "133405528",
                                      "name": "Choco-shots (bubblegum)",
                                      "price": 10593,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "133405532",
                                      "name": "Choco-shots (cinnamon)",
                                      "price": 10593,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "133405529",
                                      "name": "Choco-shots (lemon)",
                                      "price": 10593,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "133405533",
                                      "name": "Choco-shots (mint)",
                                      "price": 10593,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 8,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.9",
                                  "ratingCount": "41 ratings",
                                  "ratingCountV2": "41"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "94253720"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "136477581",
                              "name": "Zero Maida Wholewheat Sourdough (350gm)",
                              "category": "Zero Maida Breads",
                              "description": "Enjoy the wholesome goodness of our Zero Maida Wholewheat Sourdough – naturally fermented, full of nutrients, and bursting with earthy flavour. A healthy, hearty choice for every bite",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/5/599864e8-16bd-4b39-8482-b3a593aa6cec_f0113362-2b70-49f3-93eb-01f36268044b.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 19900,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542499",
                                  "groupName": "Addons",
                                  "choices": [
                                    {
                                      "id": "132100030",
                                      "name": "Jain Peri-peri Cheese Crackers (zero Maida) (100gms)",
                                      "price": 15600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100020",
                                      "name": "Makai Jowar Jeera Lemon Nachos (zero Maida) (100gms)",
                                      "price": 14300,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100022",
                                      "name": "Chocolate Chip (wholewheat) (150gms)",
                                      "price": 16900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100009",
                                      "name": "Fresh Salsa (jain)",
                                      "price": 28600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100014",
                                      "name": "Creamy Almond (unsweetened)",
                                      "price": 23700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100029",
                                      "name": "Crunchy Peanut (unsweetened)",
                                      "price": 11800,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100018",
                                      "name": "Choco-shots (bubblegum)",
                                      "price": 10600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100032",
                                      "name": "Bajra Rajgira Parsley Lavash (zero Maida) (100gms)",
                                      "price": 14300,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100006",
                                      "name": "Pain Au Chocolat",
                                      "price": 16900,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100025",
                                      "name": "Hazelnut Chocolate",
                                      "price": 29200,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 10,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.5",
                                  "ratingCount": "26 ratings",
                                  "ratingCountV2": "26"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "94253721"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ],
                      "subtitleSuffix": {

                      },
                      "image": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/fafb65d1-16c2-498f-a5e7-6b27db855dbe_a9dec9aa-600e-4e17-831b-d4cb205f0a22.jpg",
                      "categoryId": "46597308"
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Entertainment Breads",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "157575863",
                              "name": "Methia Masala Bombay Pav (zero Maida)",
                              "category": "Entertainment Breads",
                              "description": "Pack Of 4",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/8711718b-4efd-42e7-b2ca-de0b68e5d85d_daa445df-287b-4b47-bcf4-37f67cbf3d37.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 15000,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542429",
                                  "groupName": "Add",
                                  "choices": [
                                    {
                                      "id": "132100016",
                                      "name": "Brookie (box Of 2)",
                                      "price": 29700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100011",
                                      "name": "Wholewheat Pesto Roll (zero Maida)",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100013",
                                      "name": "Hazelnut Mousse",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100028",
                                      "name": "Korean Cheese Bun (jain)",
                                      "price": 18600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100008",
                                      "name": "Choco-shots (bubblegum)",
                                      "price": 10600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100021",
                                      "name": "Bajra Rajgira Parsley Lavash (zero Maida) (100gms)",
                                      "price": 14300,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100024",
                                      "name": "Orange, Apricot & Chocolate",
                                      "price": 29700,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 7,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.7",
                                  "ratingCount": "4 ratings",
                                  "ratingCountV2": "4"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "99201858"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "157575864",
                              "name": "Jowar Beetroot Wrap (zero Maida)",
                              "category": "Entertainment Breads",
                              "description": "Jowar & Wholewheat| Pack of 4| The heart of Mexican cuisine, perfect for burritos, tacos, and quesadillas!",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 20000,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542524",
                                  "groupName": "Add",
                                  "choices": [
                                    {
                                      "id": "132100016",
                                      "name": "Brookie (box Of 2)",
                                      "price": 29700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100011",
                                      "name": "Wholewheat Pesto Roll (zero Maida)",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100013",
                                      "name": "Hazelnut Mousse",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100028",
                                      "name": "Korean Cheese Bun (jain)",
                                      "price": 18600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100008",
                                      "name": "Choco-shots (bubblegum)",
                                      "price": 10600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100021",
                                      "name": "Bajra Rajgira Parsley Lavash (zero Maida) (100gms)",
                                      "price": 14300,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100024",
                                      "name": "Orange, Apricot & Chocolate",
                                      "price": 29700,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 7,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {

                                }
                              },
                              "parentId": "94253703"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "157575866",
                              "name": "Jowar Spinach Wrap (zero Maida)",
                              "category": "Entertainment Breads",
                              "description": "Jowar & Wholewheat| Pack of 4| The heart of Mexican cuisine, perfect for burritos, tacos, and quesadillas!",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/5/1ef6ae53-ad3e-49e9-8b45-8ce65f05441f_8f6df404-8d13-4ca5-9d30-c84a405bca55.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 20000,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542434",
                                  "groupName": "Add",
                                  "choices": [
                                    {
                                      "id": "132100016",
                                      "name": "Brookie (box Of 2)",
                                      "price": 29700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100011",
                                      "name": "Wholewheat Pesto Roll (zero Maida)",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100013",
                                      "name": "Hazelnut Mousse",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100028",
                                      "name": "Korean Cheese Bun (jain)",
                                      "price": 18600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100008",
                                      "name": "Choco-shots (bubblegum)",
                                      "price": 10600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100021",
                                      "name": "Bajra Rajgira Parsley Lavash (zero Maida) (100gms)",
                                      "price": 14300,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100024",
                                      "name": "Orange, Apricot & Chocolate",
                                      "price": 29700,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 7,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.7",
                                  "ratingCount": "21 ratings",
                                  "ratingCountV2": "21"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "94253711"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "157575867",
                              "name": "Jowar Tortilla Wrap (zero Maida)",
                              "category": "Entertainment Breads",
                              "description": "Jowar & Wholewheat| Pack of 4| The heart of Mexican cuisine, perfect for burritos, tacos, and quesadillas!",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/ca2b6d74-86fc-4b61-af46-f211d9e473ee_aafd73e1-15f0-43d2-a69a-4d313bbc1551.JPG",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 20000,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542452",
                                  "groupName": "Add",
                                  "choices": [
                                    {
                                      "id": "132100016",
                                      "name": "Brookie (box Of 2)",
                                      "price": 29700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100011",
                                      "name": "Wholewheat Pesto Roll (zero Maida)",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100013",
                                      "name": "Hazelnut Mousse",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100028",
                                      "name": "Korean Cheese Bun (jain)",
                                      "price": 18600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100008",
                                      "name": "Choco-shots (bubblegum)",
                                      "price": 10600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100021",
                                      "name": "Bajra Rajgira Parsley Lavash (zero Maida) (100gms)",
                                      "price": 14300,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100024",
                                      "name": "Orange, Apricot & Chocolate",
                                      "price": 29700,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 7,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.6",
                                  "ratingCount": "36 ratings",
                                  "ratingCountV2": "36"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "94253714"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "157575870",
                              "name": "Millet Subs (pack Of 2)",
                              "category": "Entertainment Breads",
                              "description": "Seeded Subs ",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/03e52f8f-8033-42af-a9e2-3b39f4471fe8_413fc90e-b07a-4122-926c-b29ae59adc15.JPG",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 12500,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542426",
                                  "groupName": "Add",
                                  "choices": [
                                    {
                                      "id": "132100016",
                                      "name": "Brookie (box Of 2)",
                                      "price": 29700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100011",
                                      "name": "Wholewheat Pesto Roll (zero Maida)",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100013",
                                      "name": "Hazelnut Mousse",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100028",
                                      "name": "Korean Cheese Bun (jain)",
                                      "price": 18600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100008",
                                      "name": "Choco-shots (bubblegum)",
                                      "price": 10600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100021",
                                      "name": "Bajra Rajgira Parsley Lavash (zero Maida) (100gms)",
                                      "price": 14300,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100024",
                                      "name": "Orange, Apricot & Chocolate",
                                      "price": 29700,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 7,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "35 ratings",
                                  "ratingCountV2": "35"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "94169419"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "157576298",
                              "name": "Jowar Rajgira Kulcha",
                              "category": "Entertainment Breads",
                              "description": "Pack of 4| Delicious Millet & Wholewheat Kulchas – a wholesome twist to your everyday meals! Soft, flavorful, and nutritious, they’re the perfect fit for your chole!",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/4f84d1da-0ba0-4b3b-853e-8fedd26347f7_0d1a58c7-9b86-410f-bc61-5307eeb5d9d5.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 14200,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542404",
                                  "groupName": "Add",
                                  "choices": [
                                    {
                                      "id": "132100016",
                                      "name": "Brookie (box Of 2)",
                                      "price": 29700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100011",
                                      "name": "Wholewheat Pesto Roll (zero Maida)",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100013",
                                      "name": "Hazelnut Mousse",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100028",
                                      "name": "Korean Cheese Bun (jain)",
                                      "price": 18600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100008",
                                      "name": "Choco-shots (bubblegum)",
                                      "price": 10600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100021",
                                      "name": "Bajra Rajgira Parsley Lavash (zero Maida) (100gms)",
                                      "price": 14300,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100024",
                                      "name": "Orange, Apricot & Chocolate",
                                      "price": 29700,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 7,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "5.0",
                                  "ratingCount": "9 ratings",
                                  "ratingCountV2": "9"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "94253707"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "136477616",
                              "name": "Bajra Jowar Pizza Base (pack Of 4)",
                              "category": "Entertainment Breads",
                              "description": "Crafted for perfection – our Thin Crust Pizza Base, crispy, light, and ready to hold your favourite toppings.",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/d8df6b00-62d2-4f5e-b445-2b9bdeb65bbc_a6b042b9-7c9a-4505-a8ac-eb623c63ede0.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 20000,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542519",
                                  "groupName": "Add",
                                  "choices": [
                                    {
                                      "id": "132100016",
                                      "name": "Brookie (box Of 2)",
                                      "price": 29700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100011",
                                      "name": "Wholewheat Pesto Roll (zero Maida)",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100013",
                                      "name": "Hazelnut Mousse",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100028",
                                      "name": "Korean Cheese Bun (jain)",
                                      "price": 18600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100008",
                                      "name": "Choco-shots (bubblegum)",
                                      "price": 10600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100021",
                                      "name": "Bajra Rajgira Parsley Lavash (zero Maida) (100gms)",
                                      "price": 14300,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100024",
                                      "name": "Orange, Apricot & Chocolate",
                                      "price": 29700,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 7,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "199524470",
                                  "groupName": "Extra Add",
                                  "choices": [
                                    {
                                      "id": "133405526",
                                      "name": "Hazelnut Mousse",
                                      "price": 16525,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "133405527",
                                      "name": "Brookies Box - Pack Of 2",
                                      "price": 29661,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "133405530",
                                      "name": "Glutenfree Almond Cupcake- Pack Of 6",
                                      "price": 25339,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "133405531",
                                      "name": "Assorted Brownie Box - Pack Of 4",
                                      "price": 42288,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "133405529",
                                      "name": "Choco-shots (lemon)",
                                      "price": 10593,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "133405532",
                                      "name": "Choco-shots (cinnamon)",
                                      "price": 10593,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "133405533",
                                      "name": "Choco-shots (mint)",
                                      "price": 10593,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "133405528",
                                      "name": "Choco-shots (bubblegum)",
                                      "price": 10593,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 8,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "1006 ratings",
                                  "ratingCountV2": "1.0K+"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "2023976"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "136477617",
                              "name": "Bajra Jowar Pav (pack Of 8)",
                              "category": "Entertainment Breads",
                              "description": "Wholesome and tasty – our Bombay Pav, soft, fresh, and full of authentic goodness.",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/f66118e7-f9d7-4209-86ce-83bb4a0e6b2a_9d56de73-003e-4918-a3e5-b37d1d7df9eb.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 15000,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542432",
                                  "groupName": "Add",
                                  "choices": [
                                    {
                                      "id": "132100016",
                                      "name": "Brookie (box Of 2)",
                                      "price": 29700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100011",
                                      "name": "Wholewheat Pesto Roll (zero Maida)",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100013",
                                      "name": "Hazelnut Mousse",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100028",
                                      "name": "Korean Cheese Bun (jain)",
                                      "price": 18600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100008",
                                      "name": "Choco-shots (bubblegum)",
                                      "price": 10600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100021",
                                      "name": "Bajra Rajgira Parsley Lavash (zero Maida) (100gms)",
                                      "price": 14300,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100024",
                                      "name": "Orange, Apricot & Chocolate",
                                      "price": 29700,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 7,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "474 ratings",
                                  "ratingCountV2": "474"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "2023975"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "136477618",
                              "name": "Jowar Rajgira Burger Buns (pack Of 4)",
                              "category": "Entertainment Breads",
                              "description": "Elevate your burger experience with our buns topped with olives and sesame seeds – soft, flavorful, and irresistibly wholesome.",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/25/31444f60-5cf6-4b5f-a46a-b5334d04f5bf_13ccb7bf-5e37-4631-9f3a-c10e6d08d445.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 15000,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542569",
                                  "groupName": "Add",
                                  "choices": [
                                    {
                                      "id": "132100016",
                                      "name": "Brookie (box Of 2)",
                                      "price": 29700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100011",
                                      "name": "Wholewheat Pesto Roll (zero Maida)",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100013",
                                      "name": "Hazelnut Mousse",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100028",
                                      "name": "Korean Cheese Bun (jain)",
                                      "price": 18600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100008",
                                      "name": "Choco-shots (bubblegum)",
                                      "price": 10600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100021",
                                      "name": "Bajra Rajgira Parsley Lavash (zero Maida) (100gms)",
                                      "price": 14300,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100024",
                                      "name": "Orange, Apricot & Chocolate",
                                      "price": 29700,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 7,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "199524471",
                                  "groupName": "Extra Add",
                                  "choices": [
                                    {
                                      "id": "133405526",
                                      "name": "Hazelnut Mousse",
                                      "price": 16525,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "133405527",
                                      "name": "Brookies Box - Pack Of 2",
                                      "price": 29661,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "133405530",
                                      "name": "Glutenfree Almond Cupcake- Pack Of 6",
                                      "price": 25339,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "133405531",
                                      "name": "Assorted Brownie Box - Pack Of 4",
                                      "price": 42288,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "133405529",
                                      "name": "Choco-shots (lemon)",
                                      "price": 10593,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "133405532",
                                      "name": "Choco-shots (cinnamon)",
                                      "price": 10593,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "133405533",
                                      "name": "Choco-shots (mint)",
                                      "price": 10593,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "133405528",
                                      "name": "Choco-shots (bubblegum)",
                                      "price": 10593,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 8,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "417 ratings",
                                  "ratingCountV2": "417"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "2024021"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "136477619",
                              "name": "Jowar Rice Pita Bread (pack Of4)",
                              "category": "Entertainment Breads",
                              "description": "Millet-Based|Jaggery Based|No Preservatives",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/24/464bc798-687e-4fd4-b091-c174ac9d9789_3970890f-c8fd-4977-b0cc-18230707eccc.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 15000,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542396",
                                  "groupName": "Add",
                                  "choices": [
                                    {
                                      "id": "132100016",
                                      "name": "Brookie (box Of 2)",
                                      "price": 29700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100011",
                                      "name": "Wholewheat Pesto Roll (zero Maida)",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100013",
                                      "name": "Hazelnut Mousse",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100028",
                                      "name": "Korean Cheese Bun (jain)",
                                      "price": 18600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100008",
                                      "name": "Choco-shots (bubblegum)",
                                      "price": 10600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100021",
                                      "name": "Bajra Rajgira Parsley Lavash (zero Maida) (100gms)",
                                      "price": 14300,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100024",
                                      "name": "Orange, Apricot & Chocolate",
                                      "price": 29700,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 7,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.6",
                                  "ratingCount": "252 ratings",
                                  "ratingCountV2": "252"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "47707122"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "136477625",
                              "name": "Whole-wheat Pizza Base (zero Maida)",
                              "category": "Entertainment Breads",
                              "description": "Pack of 2",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/24/13c9ec5d-6e1d-4c29-b67a-2558ec5b29f2_f6b44d40-fd91-4fcd-83d5-55bb8d275148.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 15000,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542456",
                                  "groupName": "Add",
                                  "choices": [
                                    {
                                      "id": "132100016",
                                      "name": "Brookie (box Of 2)",
                                      "price": 29700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100011",
                                      "name": "Wholewheat Pesto Roll (zero Maida)",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100013",
                                      "name": "Hazelnut Mousse",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100028",
                                      "name": "Korean Cheese Bun (jain)",
                                      "price": 18600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100008",
                                      "name": "Choco-shots (bubblegum)",
                                      "price": 10600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100021",
                                      "name": "Bajra Rajgira Parsley Lavash (zero Maida) (100gms)",
                                      "price": 14300,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100024",
                                      "name": "Orange, Apricot & Chocolate",
                                      "price": 29700,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 7,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "199524473",
                                  "groupName": "Extra Add",
                                  "choices": [
                                    {
                                      "id": "133405526",
                                      "name": "Hazelnut Mousse",
                                      "price": 16525,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "133405527",
                                      "name": "Brookies Box - Pack Of 2",
                                      "price": 29661,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "133405530",
                                      "name": "Glutenfree Almond Cupcake- Pack Of 6",
                                      "price": 25339,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "133405531",
                                      "name": "Assorted Brownie Box - Pack Of 4",
                                      "price": 42288,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "133405529",
                                      "name": "Choco-shots (lemon)",
                                      "price": 10593,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "133405532",
                                      "name": "Choco-shots (cinnamon)",
                                      "price": 10593,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "133405533",
                                      "name": "Choco-shots (mint)",
                                      "price": 10593,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "133405528",
                                      "name": "Choco-shots (bubblegum)",
                                      "price": 10593,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 8,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.9",
                                  "ratingCount": "41 ratings",
                                  "ratingCountV2": "41"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "94253720"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "136477627",
                              "name": "Wholewheat Pesto Rolls (zero Maida)",
                              "category": "Entertainment Breads",
                              "description": "Box of 3| Delight in our Zero Maida Pesto Rolls-swirled with freshly made, vibrant pesto",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/25/9e62b396-4558-4c06-a77d-cf5c3041ef71_b8feadc6-1124-47a6-97de-6e2a99d1fc59.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 16500,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542431",
                                  "groupName": "Add",
                                  "choices": [
                                    {
                                      "id": "132100016",
                                      "name": "Brookie (box Of 2)",
                                      "price": 29700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100011",
                                      "name": "Wholewheat Pesto Roll (zero Maida)",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100013",
                                      "name": "Hazelnut Mousse",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100028",
                                      "name": "Korean Cheese Bun (jain)",
                                      "price": 18600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100008",
                                      "name": "Choco-shots (bubblegum)",
                                      "price": 10600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100021",
                                      "name": "Bajra Rajgira Parsley Lavash (zero Maida) (100gms)",
                                      "price": 14300,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100024",
                                      "name": "Orange, Apricot & Chocolate",
                                      "price": 29700,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 7,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.7",
                                  "ratingCount": "16 ratings",
                                  "ratingCountV2": "16"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "94310702"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ],
                      "subtitleSuffix": {

                      },
                      "image": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/8711718b-4efd-42e7-b2ca-de0b68e5d85d_daa445df-287b-4b47-bcf4-37f67cbf3d37.jpg",
                      "categoryId": "33474909"
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Sourdough Breads (no Yeast)",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "181113161",
                              "name": "Quinoa Wholewheat Sourdough",
                              "category": "Sourdough Breads (no Yeast)",
                              "description": "Enjoy our Zero Maida Quinoa Wholewheat Sourdough. Naturally fermented, full of nutrients and bursting with earthy flavor. A healthy, hearty choice for every bite",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/9/11/f4a225f2-15f5-4e42-87b8-ebab6b193322_217033f7-7414-46f4-998c-7bd0d12cf841.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 26900,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "5.0",
                                  "ratingCount": "2 ratings",
                                  "ratingCountV2": "2"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "109890561"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "136477590",
                              "name": "Oats & Sesame Seeds Sourdough (350gms)",
                              "category": "Sourdough Breads (no Yeast)",
                              "description": "Experience the authentic taste of our Sourdough – naturally fermented for a rich, tangy flavor and a perfect airy texture. A true artisanal delight in every bite",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/6/24/a80e8977-7af1-4f9c-ad82-ba3d232bf8a8_314d2fc0-528d-4a4a-abdf-8c02ff99e434.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 19900,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542473",
                                  "groupName": "Addons",
                                  "choices": [
                                    {
                                      "id": "132100030",
                                      "name": "Jain Peri-peri Cheese Crackers (zero Maida) (100gms)",
                                      "price": 15600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100020",
                                      "name": "Makai Jowar Jeera Lemon Nachos (zero Maida) (100gms)",
                                      "price": 14300,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100022",
                                      "name": "Chocolate Chip (wholewheat) (150gms)",
                                      "price": 16900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100009",
                                      "name": "Fresh Salsa (jain)",
                                      "price": 28600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100014",
                                      "name": "Creamy Almond (unsweetened)",
                                      "price": 23700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100029",
                                      "name": "Crunchy Peanut (unsweetened)",
                                      "price": 11800,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100018",
                                      "name": "Choco-shots (bubblegum)",
                                      "price": 10600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100032",
                                      "name": "Bajra Rajgira Parsley Lavash (zero Maida) (100gms)",
                                      "price": 14300,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100006",
                                      "name": "Pain Au Chocolat",
                                      "price": 16900,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100025",
                                      "name": "Hazelnut Chocolate",
                                      "price": 29200,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 10,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {
                                "text": "Bestseller",
                                "textColor": "#ffffff",
                                "topBackgroundColor": "#d53d4c",
                                "bottomBackgroundColor": "#b02331"
                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "isBestseller": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "149 ratings",
                                  "ratingCountV2": "149"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "79962327"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "136477591",
                              "name": "Chilly Cheese Sourdough (350gms)",
                              "category": "Sourdough Breads (no Yeast)",
                              "description": "Warm up with our Chilly Cheese Sourdough – a comforting blend of tangy sourdough, melted cheese, and a gentle hint of spice. A cozy twist on a classic favourite!",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/6/24/369839b6-9c5d-4e50-bd48-fa4fccf43e49_40e29b70-d592-4fd5-8ebd-692e252941c1.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 19900,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542531",
                                  "groupName": "Addons",
                                  "choices": [
                                    {
                                      "id": "132100030",
                                      "name": "Jain Peri-peri Cheese Crackers (zero Maida) (100gms)",
                                      "price": 15600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100020",
                                      "name": "Makai Jowar Jeera Lemon Nachos (zero Maida) (100gms)",
                                      "price": 14300,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100022",
                                      "name": "Chocolate Chip (wholewheat) (150gms)",
                                      "price": 16900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100009",
                                      "name": "Fresh Salsa (jain)",
                                      "price": 28600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100014",
                                      "name": "Creamy Almond (unsweetened)",
                                      "price": 23700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100029",
                                      "name": "Crunchy Peanut (unsweetened)",
                                      "price": 11800,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100018",
                                      "name": "Choco-shots (bubblegum)",
                                      "price": 10600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100032",
                                      "name": "Bajra Rajgira Parsley Lavash (zero Maida) (100gms)",
                                      "price": 14300,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100006",
                                      "name": "Pain Au Chocolat",
                                      "price": 16900,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100025",
                                      "name": "Hazelnut Chocolate",
                                      "price": 29200,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 10,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "129 ratings",
                                  "ratingCountV2": "129"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "79962304"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "136477593",
                              "name": "Zero Maida Wholewheat Sourdough (350gms)",
                              "category": "Sourdough Breads (no Yeast)",
                              "description": "Enjoy the wholesome goodness of our Zero Maida Wholewheat Sourdough – naturally fermented, full of nutrients, and bursting with earthy flavour. A healthy, hearty choice for every bite",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/c298565a-6f68-4b2e-8aab-9eb3044290eb_b81b4213-d856-483f-b0e1-bdae7a7627eb.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 19900,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542485",
                                  "groupName": "Addons",
                                  "choices": [
                                    {
                                      "id": "132100030",
                                      "name": "Jain Peri-peri Cheese Crackers (zero Maida) (100gms)",
                                      "price": 15600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100020",
                                      "name": "Makai Jowar Jeera Lemon Nachos (zero Maida) (100gms)",
                                      "price": 14300,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100022",
                                      "name": "Chocolate Chip (wholewheat) (150gms)",
                                      "price": 16900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100009",
                                      "name": "Fresh Salsa (jain)",
                                      "price": 28600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100014",
                                      "name": "Creamy Almond (unsweetened)",
                                      "price": 23700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100029",
                                      "name": "Crunchy Peanut (unsweetened)",
                                      "price": 11800,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100018",
                                      "name": "Choco-shots (bubblegum)",
                                      "price": 10600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100032",
                                      "name": "Bajra Rajgira Parsley Lavash (zero Maida) (100gms)",
                                      "price": 14300,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100006",
                                      "name": "Pain Au Chocolat",
                                      "price": 16900,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100025",
                                      "name": "Hazelnut Chocolate",
                                      "price": 29200,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 10,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.7",
                                  "ratingCount": "83 ratings",
                                  "ratingCountV2": "83"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "79962344"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ],
                      "subtitleSuffix": {

                      },
                      "image": "FOOD_CATALOG/IMAGES/CMS/2025/9/11/f4a225f2-15f5-4e42-87b8-ebab6b193322_217033f7-7414-46f4-998c-7bd0d12cf841.jpg",
                      "categoryId": "33474913"
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Glutenfree",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "157575873",
                              "name": "Seeded Sourdough (300gms)",
                              "category": "Glutenfree",
                              "description": "Enjoy Our Gluten-Free Seeded Sourdough ",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/b557f42b-55a8-4ad7-872b-d1a92802f4fc_ea6a501e-3e80-48b8-b132-cc8fcb26c67b.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 26900,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542541",
                                  "groupName": "Add-ons",
                                  "choices": [
                                    {
                                      "id": "132100023",
                                      "name": "Glutenfree Almond Cupcakes (box Of 6)",
                                      "price": 25300,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100026",
                                      "name": "Cranberry Walnut (jowar) (100gms)",
                                      "price": 16900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100033",
                                      "name": "Choco-shots (bubblegum)",
                                      "price": 10600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100007",
                                      "name": "Almond Ginger (jowar) (100gms)",
                                      "price": 16900,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100010",
                                      "name": "Twin Pack",
                                      "price": 15300,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100027",
                                      "name": "Jowar Rice Olive Slider Buns (pack Of 6)",
                                      "price": 17500,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 6,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "32 ratings",
                                  "ratingCountV2": "32"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "94169425"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "172291495",
                              "name": "Buckwheat Pizza (pack Of 3)",
                              "category": "Glutenfree",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 23500,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {

                                }
                              },
                              "parentId": "106655495"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "136477582",
                              "name": "Jowar Rice Bread (350gms)",
                              "category": "Glutenfree",
                              "description": "Relish the goodness of our Jowar Rice Loaf – naturally fermented for a perfect texture and full flavour, without compromising on taste or nutrition. A wholesome choice for everyone to enjoy",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/4a406afd-7758-40e9-b903-19df0d000c78_a0a3a1b3-fbd6-426b-9416-08abbeffd859.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 24900,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542441",
                                  "groupName": "Add-ons",
                                  "choices": [
                                    {
                                      "id": "132100023",
                                      "name": "Glutenfree Almond Cupcakes (box Of 6)",
                                      "price": 25300,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100026",
                                      "name": "Cranberry Walnut (jowar) (100gms)",
                                      "price": 16900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100033",
                                      "name": "Choco-shots (bubblegum)",
                                      "price": 10600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100007",
                                      "name": "Almond Ginger (jowar) (100gms)",
                                      "price": 16900,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100010",
                                      "name": "Twin Pack",
                                      "price": 15300,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100027",
                                      "name": "Jowar Rice Olive Slider Buns (pack Of 6)",
                                      "price": 17500,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 6,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "45 ratings",
                                  "ratingCountV2": "45"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "79962317"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "136477583",
                              "name": "Millet Sourdough (350gms)",
                              "category": "Glutenfree",
                              "description": "Relish the goodness of our Gluten-Free Sourdough – naturally fermented for a perfect texture and full flavour, without compromising on taste or nutrition. A wholesome choice for everyone to enjoy",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/4252c7bd-f917-4077-9d2f-3c3d08e209ff_7d7d2f6f-c9ea-4bd0-bca9-81fc0dd71833.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 25900,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542463",
                                  "groupName": "Add-ons",
                                  "choices": [
                                    {
                                      "id": "132100023",
                                      "name": "Glutenfree Almond Cupcakes (box Of 6)",
                                      "price": 25300,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100026",
                                      "name": "Cranberry Walnut (jowar) (100gms)",
                                      "price": 16900,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100033",
                                      "name": "Choco-shots (bubblegum)",
                                      "price": 10600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100007",
                                      "name": "Almond Ginger (jowar) (100gms)",
                                      "price": 16900,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100010",
                                      "name": "Twin Pack",
                                      "price": 15300,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100027",
                                      "name": "Jowar Rice Olive Slider Buns (pack Of 6)",
                                      "price": 17500,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 6,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "5.0",
                                  "ratingCount": "41 ratings",
                                  "ratingCountV2": "41"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "81228358"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ],
                      "subtitleSuffix": {

                      },
                      "image": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/b557f42b-55a8-4ad7-872b-d1a92802f4fc_ea6a501e-3e80-48b8-b132-cc8fcb26c67b.jpg",
                      "categoryId": "46597309"
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Spreads & Nut Butters",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "157575874",
                              "name": "Creamy Almond (unsweetened)",
                              "category": "Spreads & Nut Butters",
                              "description": "100gms|Savor our all-natural Almond Butter – made with pure almonds and no preservatives.",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/5/32ff24aa-bc41-4386-868f-7ea4f0480724_b91ed437-4c16-431b-810e-1f7dea998afb.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 25238,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542478",
                                  "groupName": "Add Extras",
                                  "choices": [
                                    {
                                      "id": "132100017",
                                      "name": "Wholewheat Pesto Roll (zero Maida)",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100019",
                                      "name": "Fresh Salsa (jain)",
                                      "price": 28600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100012",
                                      "name": "Hazelnut Mousse",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100015",
                                      "name": "Brookie (box Of 2)",
                                      "price": 29700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100031",
                                      "name": "Korean Cheese Bun (jain)",
                                      "price": 18600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100034",
                                      "name": "Orange, Apricot & Chocolate",
                                      "price": 29700,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 6,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "5.0",
                                  "ratingCount": "5 ratings",
                                  "ratingCountV2": "5"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "imageBadges": [
                                {
                                  "imageId": "sachin/OCT2025/NO%20ADDEED%20SUGAR.png"
                                }
                              ],
                              "parentId": "94169397"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "157575875",
                              "name": "Crunchy Peanut (unsweetened)",
                              "category": "Spreads & Nut Butters",
                              "description": "100gms|Savor our all-natural Peanut Butter ",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/b4999b5e-8e0f-4478-97ee-b5c0b3b0c2d3_343ed315-5f89-481b-8ed2-898495b9d25c.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 11905,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542466",
                                  "groupName": "Add Extras",
                                  "choices": [
                                    {
                                      "id": "132100017",
                                      "name": "Wholewheat Pesto Roll (zero Maida)",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100019",
                                      "name": "Fresh Salsa (jain)",
                                      "price": 28600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100012",
                                      "name": "Hazelnut Mousse",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100015",
                                      "name": "Brookie (box Of 2)",
                                      "price": 29700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100031",
                                      "name": "Korean Cheese Bun (jain)",
                                      "price": 18600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100034",
                                      "name": "Orange, Apricot & Chocolate",
                                      "price": 29700,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 6,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "5.0",
                                  "ratingCount": "5 ratings",
                                  "ratingCountV2": "5"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "imageBadges": [
                                {
                                  "imageId": "sachin/OCT2025/NO%20ADDEED%20SUGAR.png"
                                }
                              ],
                              "parentId": "94169398"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "157575876",
                              "name": "Fresh Salsa (jain)",
                              "category": "Spreads & Nut Butters",
                              "description": "100gms|Salsa ",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 17143,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542543",
                                  "groupName": "Add Extras",
                                  "choices": [
                                    {
                                      "id": "132100017",
                                      "name": "Wholewheat Pesto Roll (zero Maida)",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100019",
                                      "name": "Fresh Salsa (jain)",
                                      "price": 28600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100012",
                                      "name": "Hazelnut Mousse",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100015",
                                      "name": "Brookie (box Of 2)",
                                      "price": 29700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100031",
                                      "name": "Korean Cheese Bun (jain)",
                                      "price": 18600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100034",
                                      "name": "Orange, Apricot & Chocolate",
                                      "price": 29700,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 6,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "5.0",
                                  "ratingCount": "1 rating",
                                  "ratingCountV2": "1"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "94169401"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ],
                      "subtitleSuffix": {

                      },
                      "image": "FOOD_CATALOG/IMAGES/CMS/2025/1/5/32ff24aa-bc41-4386-868f-7ea4f0480724_b91ed437-4c16-431b-810e-1f7dea998afb.jpg",
                      "categoryId": "56179741"
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Ready To Eat (100% Veg)",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "137994569",
                              "name": "Korean Cheese Bun (jain)",
                              "category": "Ready To Eat (100% Veg)",
                              "description": "Experience the soft, pillowy goodness of our Zero Maida Korean Cheese Bun. Filled with creamy, cheesy perfection, it’s a guilt-free indulgence you’ll love",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/d0c72d4d-366c-40e4-8290-7baaf75c138f_9f678886-c050-4520-94c3-4d738a040c5e.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 20952,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542474",
                                  "groupName": "Add",
                                  "choices": [
                                    {
                                      "id": "132100016",
                                      "name": "Brookie (box Of 2)",
                                      "price": 29700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100011",
                                      "name": "Wholewheat Pesto Roll (zero Maida)",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100013",
                                      "name": "Hazelnut Mousse",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100028",
                                      "name": "Korean Cheese Bun (jain)",
                                      "price": 18600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100008",
                                      "name": "Choco-shots (bubblegum)",
                                      "price": 10600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100021",
                                      "name": "Bajra Rajgira Parsley Lavash (zero Maida) (100gms)",
                                      "price": 14300,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100024",
                                      "name": "Orange, Apricot & Chocolate",
                                      "price": 29700,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 7,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "40 ratings",
                                  "ratingCountV2": "40"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "80912481"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "157575879",
                              "name": "Traditional Butter Croissant (zero Maida)",
                              "category": "Ready To Eat (100% Veg)",
                              "description": "70gms|Indulge in the flaky perfection of our Butter Croissant – golden, crisp layers encasing a soft, buttery interior. Allergens- Dairy, Gluten",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/de622637-7e41-48eb-a2a5-0cb3fc002999_c204de56-ab19-4bdb-855f-1c583ddb72bb.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 11428,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542494",
                                  "groupName": "Add",
                                  "choices": [
                                    {
                                      "id": "132100016",
                                      "name": "Brookie (box Of 2)",
                                      "price": 29700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100011",
                                      "name": "Wholewheat Pesto Roll (zero Maida)",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100013",
                                      "name": "Hazelnut Mousse",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100028",
                                      "name": "Korean Cheese Bun (jain)",
                                      "price": 18600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100008",
                                      "name": "Choco-shots (bubblegum)",
                                      "price": 10600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100021",
                                      "name": "Bajra Rajgira Parsley Lavash (zero Maida) (100gms)",
                                      "price": 14300,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100024",
                                      "name": "Orange, Apricot & Chocolate",
                                      "price": 29700,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 7,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.6",
                                  "ratingCount": "30 ratings",
                                  "ratingCountV2": "30"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "94169429"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "157575880",
                              "name": "Wholewheat Pesto Roll (zero Maida)",
                              "category": "Ready To Eat (100% Veg)",
                              "description": "Box of 3| Delight in our Zero Maida Pesto Rolls-swirled with freshly made, vibrant pesto",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/e634cfe0-8012-4d4b-99d8-88c0834afeca_97d5e66f-87a7-47af-b6ff-c2f898d4f9b7.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 16500,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542533",
                                  "groupName": "Add",
                                  "choices": [
                                    {
                                      "id": "132100016",
                                      "name": "Brookie (box Of 2)",
                                      "price": 29700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100011",
                                      "name": "Wholewheat Pesto Roll (zero Maida)",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100013",
                                      "name": "Hazelnut Mousse",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100028",
                                      "name": "Korean Cheese Bun (jain)",
                                      "price": 18600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100008",
                                      "name": "Choco-shots (bubblegum)",
                                      "price": 10600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100021",
                                      "name": "Bajra Rajgira Parsley Lavash (zero Maida) (100gms)",
                                      "price": 14300,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100024",
                                      "name": "Orange, Apricot & Chocolate",
                                      "price": 29700,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 7,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "9 ratings",
                                  "ratingCountV2": "9"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "94253719"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ],
                      "subtitleSuffix": {

                      },
                      "image": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/d0c72d4d-366c-40e4-8290-7baaf75c138f_9f678886-c050-4520-94c3-4d738a040c5e.jpg",
                      "categoryId": "56179742"
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Zero Maida Cookies",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "136477594",
                              "name": "Chocolate Chip (wholewheat) (150gms)",
                              "category": "Zero Maida Cookies",
                              "description": "Enjoy our Bite-sized Chocolate Chip Cookies ",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/3ddf8161-4efa-4281-b6c4-b18346474b08_31e56a04-3136-446f-8071-484fdaa37582.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 16667,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542400",
                                  "groupName": "Add Extras",
                                  "choices": [
                                    {
                                      "id": "132100017",
                                      "name": "Wholewheat Pesto Roll (zero Maida)",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100019",
                                      "name": "Fresh Salsa (jain)",
                                      "price": 28600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100012",
                                      "name": "Hazelnut Mousse",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100015",
                                      "name": "Brookie (box Of 2)",
                                      "price": 29700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100031",
                                      "name": "Korean Cheese Bun (jain)",
                                      "price": 18600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100034",
                                      "name": "Orange, Apricot & Chocolate",
                                      "price": 29700,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 6,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "5.0",
                                  "ratingCount": "36 ratings",
                                  "ratingCountV2": "36"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "79962307"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "136477595",
                              "name": "Oats & Almond (wholewheat) (150gms)",
                              "category": "Zero Maida Cookies",
                              "description": "Treat yourself to our Oats & Almond Cookies ",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/24/7f9130bc-7514-47fb-b5dc-85897950149d_1af93623-c159-4c46-aa81-996e58713839.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 18000,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542425",
                                  "groupName": "Add Extras",
                                  "choices": [
                                    {
                                      "id": "132100017",
                                      "name": "Wholewheat Pesto Roll (zero Maida)",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100019",
                                      "name": "Fresh Salsa (jain)",
                                      "price": 28600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100012",
                                      "name": "Hazelnut Mousse",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100015",
                                      "name": "Brookie (box Of 2)",
                                      "price": 29700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100031",
                                      "name": "Korean Cheese Bun (jain)",
                                      "price": 18600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100034",
                                      "name": "Orange, Apricot & Chocolate",
                                      "price": 29700,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 6,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "5.0",
                                  "ratingCount": "42 ratings",
                                  "ratingCountV2": "42"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "79962326"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "136477596",
                              "name": "Hazelnut (wholewheat) (150gms)",
                              "category": "Zero Maida Cookies",
                              "description": "Indulge in our Hazelnut Cookies ",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/02f9a678-41c1-4b6d-8ead-f4d32dbedbbd_efb0a098-dadd-4c1a-bf5e-9edd5446b8f7.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 16667,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542514",
                                  "groupName": "Add Extras",
                                  "choices": [
                                    {
                                      "id": "132100017",
                                      "name": "Wholewheat Pesto Roll (zero Maida)",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100019",
                                      "name": "Fresh Salsa (jain)",
                                      "price": 28600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100012",
                                      "name": "Hazelnut Mousse",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100015",
                                      "name": "Brookie (box Of 2)",
                                      "price": 29700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100031",
                                      "name": "Korean Cheese Bun (jain)",
                                      "price": 18600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100034",
                                      "name": "Orange, Apricot & Chocolate",
                                      "price": 29700,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 6,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.9",
                                  "ratingCount": "39 ratings",
                                  "ratingCountV2": "39"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "79962314"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "136477598",
                              "name": "Cranberry Walnut (jowar) (100gms)",
                              "category": "Zero Maida Cookies",
                              "description": "Savor our Gluten-Free Cranberry Walnut Cookies ",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/24/e3b45e45-da8a-4760-900d-9e947d1ce5eb_6c5e31bf-8981-4775-bdc7-a8267099e321.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 16000,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542417",
                                  "groupName": "Add Extras",
                                  "choices": [
                                    {
                                      "id": "132100017",
                                      "name": "Wholewheat Pesto Roll (zero Maida)",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100019",
                                      "name": "Fresh Salsa (jain)",
                                      "price": 28600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100012",
                                      "name": "Hazelnut Mousse",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100015",
                                      "name": "Brookie (box Of 2)",
                                      "price": 29700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100031",
                                      "name": "Korean Cheese Bun (jain)",
                                      "price": 18600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100034",
                                      "name": "Orange, Apricot & Chocolate",
                                      "price": 29700,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 6,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.7",
                                  "ratingCount": "29 ratings",
                                  "ratingCountV2": "29"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "79962310"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ],
                      "subtitleSuffix": {

                      },
                      "image": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/3ddf8161-4efa-4281-b6c4-b18346474b08_31e56a04-3136-446f-8071-484fdaa37582.jpg",
                      "categoryId": "46597310"
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Desserts",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "148465934",
                              "name": "Hazelnut Mousse",
                              "category": "Desserts",
                              "description": "120gms|Indulge in our Hazelnut Mousse – a velvety blend of rich Belgian chocolate and premium hazelnuts.",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/8149fc95-233f-4748-8490-e77c3db702db_6d9e93c0-9d2e-4439-985d-6b9ee16d46b5.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 18571,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542408",
                                  "groupName": "Add",
                                  "choices": [
                                    {
                                      "id": "132100016",
                                      "name": "Brookie (box Of 2)",
                                      "price": 29700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100011",
                                      "name": "Wholewheat Pesto Roll (zero Maida)",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100013",
                                      "name": "Hazelnut Mousse",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100028",
                                      "name": "Korean Cheese Bun (jain)",
                                      "price": 18600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100008",
                                      "name": "Choco-shots (bubblegum)",
                                      "price": 10600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100021",
                                      "name": "Bajra Rajgira Parsley Lavash (zero Maida) (100gms)",
                                      "price": 14300,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100024",
                                      "name": "Orange, Apricot & Chocolate",
                                      "price": 29700,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 7,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "195542409",
                                  "groupName": "Add Extras",
                                  "choices": [
                                    {
                                      "id": "132100017",
                                      "name": "Wholewheat Pesto Roll (zero Maida)",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100019",
                                      "name": "Fresh Salsa (jain)",
                                      "price": 28600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100012",
                                      "name": "Hazelnut Mousse",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100015",
                                      "name": "Brookie (box Of 2)",
                                      "price": 29700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100031",
                                      "name": "Korean Cheese Bun (jain)",
                                      "price": 18600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100034",
                                      "name": "Orange, Apricot & Chocolate",
                                      "price": 29700,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 6,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.9",
                                  "ratingCount": "10 ratings",
                                  "ratingCountV2": "10"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "87930747"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "136477604",
                              "name": "Assorted Brownie Box - Pack Of 4",
                              "category": "Desserts",
                              "description": "Zero Maida, Zero Sugar. 4 Amazing Flavors- Hazelnut, Choc. Chip, Walnut & White Chocolate",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/04044709-8367-400f-a4ef-b87991696bf4_6afd5763-5c92-4142-8909-17305c54fb6d.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 47524,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542504",
                                  "groupName": "Add",
                                  "choices": [
                                    {
                                      "id": "132100016",
                                      "name": "Brookie (box Of 2)",
                                      "price": 29700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100011",
                                      "name": "Wholewheat Pesto Roll (zero Maida)",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100013",
                                      "name": "Hazelnut Mousse",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100028",
                                      "name": "Korean Cheese Bun (jain)",
                                      "price": 18600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100008",
                                      "name": "Choco-shots (bubblegum)",
                                      "price": 10600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100021",
                                      "name": "Bajra Rajgira Parsley Lavash (zero Maida) (100gms)",
                                      "price": 14300,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100024",
                                      "name": "Orange, Apricot & Chocolate",
                                      "price": 29700,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 7,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "195542505",
                                  "groupName": "Add Extras",
                                  "choices": [
                                    {
                                      "id": "132100017",
                                      "name": "Wholewheat Pesto Roll (zero Maida)",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100019",
                                      "name": "Fresh Salsa (jain)",
                                      "price": 28600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100012",
                                      "name": "Hazelnut Mousse",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100015",
                                      "name": "Brookie (box Of 2)",
                                      "price": 29700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100031",
                                      "name": "Korean Cheese Bun (jain)",
                                      "price": 18600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100034",
                                      "name": "Orange, Apricot & Chocolate",
                                      "price": 29700,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 6,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.7",
                                  "ratingCount": "12 ratings",
                                  "ratingCountV2": "12"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "imageBadges": [
                                {
                                  "imageId": "sachin/OCT2025/NO%20ADDEED%20SUGAR.png"
                                }
                              ],
                              "parentId": "79962297"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "136477605",
                              "name": "Brookies Box - Pack Of 2",
                              "category": "Desserts",
                              "description": "Indulge in our Zero Maida Brookie atop a Jowar Cookie ",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/24/f89fead6-d4b8-4078-b9f7-a57c891c3894_390722ce-5555-4b72-ab67-cf254e50222f.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 30000,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542483",
                                  "groupName": "Add",
                                  "choices": [
                                    {
                                      "id": "132100016",
                                      "name": "Brookie (box Of 2)",
                                      "price": 29700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100011",
                                      "name": "Wholewheat Pesto Roll (zero Maida)",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100013",
                                      "name": "Hazelnut Mousse",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100028",
                                      "name": "Korean Cheese Bun (jain)",
                                      "price": 18600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100008",
                                      "name": "Choco-shots (bubblegum)",
                                      "price": 10600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100021",
                                      "name": "Bajra Rajgira Parsley Lavash (zero Maida) (100gms)",
                                      "price": 14300,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100024",
                                      "name": "Orange, Apricot & Chocolate",
                                      "price": 29700,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 7,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "195542484",
                                  "groupName": "Add Extras",
                                  "choices": [
                                    {
                                      "id": "132100017",
                                      "name": "Wholewheat Pesto Roll (zero Maida)",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100019",
                                      "name": "Fresh Salsa (jain)",
                                      "price": 28600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100012",
                                      "name": "Hazelnut Mousse",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100015",
                                      "name": "Brookie (box Of 2)",
                                      "price": 29700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100031",
                                      "name": "Korean Cheese Bun (jain)",
                                      "price": 18600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100034",
                                      "name": "Orange, Apricot & Chocolate",
                                      "price": 29700,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 6,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.9",
                                  "ratingCount": "13 ratings",
                                  "ratingCountV2": "13"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "79962302"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "136477606",
                              "name": "Glutenfree Almond Cupcake- Pack Of 6",
                              "category": "Desserts",
                              "description": "Treat yourself to our Almond Flour Cupcakes – made with fresh Belgian chocolate and sweetened with wholesome jaggery. A decadent, guilt-free delight in every bite.",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/24/22f539e3-67a5-4206-9e31-e23079e81436_7fdf72c5-aba7-4cdc-85a4-d92b7ccd75f7.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 28476,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542577",
                                  "groupName": "Add",
                                  "choices": [
                                    {
                                      "id": "132100016",
                                      "name": "Brookie (box Of 2)",
                                      "price": 29700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100011",
                                      "name": "Wholewheat Pesto Roll (zero Maida)",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100013",
                                      "name": "Hazelnut Mousse",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100028",
                                      "name": "Korean Cheese Bun (jain)",
                                      "price": 18600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100008",
                                      "name": "Choco-shots (bubblegum)",
                                      "price": 10600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100021",
                                      "name": "Bajra Rajgira Parsley Lavash (zero Maida) (100gms)",
                                      "price": 14300,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100024",
                                      "name": "Orange, Apricot & Chocolate",
                                      "price": 29700,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 7,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "195542578",
                                  "groupName": "Add Extras",
                                  "choices": [
                                    {
                                      "id": "132100017",
                                      "name": "Wholewheat Pesto Roll (zero Maida)",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100019",
                                      "name": "Fresh Salsa (jain)",
                                      "price": 28600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100012",
                                      "name": "Hazelnut Mousse",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100015",
                                      "name": "Brookie (box Of 2)",
                                      "price": 29700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100031",
                                      "name": "Korean Cheese Bun (jain)",
                                      "price": 18600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100034",
                                      "name": "Orange, Apricot & Chocolate",
                                      "price": 29700,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 6,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.9",
                                  "ratingCount": "58 ratings",
                                  "ratingCountV2": "58"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "79962312"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ],
                      "subtitleSuffix": {

                      },
                      "image": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/8149fc95-233f-4748-8490-e77c3db702db_6d9e93c0-9d2e-4439-985d-6b9ee16d46b5.jpg",
                      "categoryId": "46597312"
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Zero Maida Teacakes",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "136477601",
                              "name": "Date & Walnut (250gms)",
                              "category": "Zero Maida Teacakes",
                              "description": "Make teatime special with our Teacake ",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/d24391fd-eaf6-47fc-a1ac-1ea2a323a079_1ee1b6a3-aef0-4d83-a519-1ecf9a5323ed.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 30667,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542553",
                                  "groupName": "Add Extras",
                                  "choices": [
                                    {
                                      "id": "132100017",
                                      "name": "Wholewheat Pesto Roll (zero Maida)",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100019",
                                      "name": "Fresh Salsa (jain)",
                                      "price": 28600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100012",
                                      "name": "Hazelnut Mousse",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100015",
                                      "name": "Brookie (box Of 2)",
                                      "price": 29700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100031",
                                      "name": "Korean Cheese Bun (jain)",
                                      "price": 18600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100034",
                                      "name": "Orange, Apricot & Chocolate",
                                      "price": 29700,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 6,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "5.0",
                                  "ratingCount": "62 ratings",
                                  "ratingCountV2": "62"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "imageBadges": [
                                {
                                  "imageId": "sachin/OCT2025/NO%20ADDEED%20SUGAR.png"
                                }
                              ],
                              "parentId": "2024009"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "136477603",
                              "name": "Orange, Apricot & Chocolate (250gms)",
                              "category": "Zero Maida Teacakes",
                              "description": "Make teatime delightful with our soft, fluffy Teacake ",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/8a2ecaf1-c8f0-4111-8000-18e5b2f55e43_4ac7a06a-1c81-489b-92b2-06f2d9268eaa.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 32190,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542523",
                                  "groupName": "Add Extras",
                                  "choices": [
                                    {
                                      "id": "132100017",
                                      "name": "Wholewheat Pesto Roll (zero Maida)",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100019",
                                      "name": "Fresh Salsa (jain)",
                                      "price": 28600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100012",
                                      "name": "Hazelnut Mousse",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100015",
                                      "name": "Brookie (box Of 2)",
                                      "price": 29700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100031",
                                      "name": "Korean Cheese Bun (jain)",
                                      "price": 18600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100034",
                                      "name": "Orange, Apricot & Chocolate",
                                      "price": 29700,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 6,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.4",
                                  "ratingCount": "25 ratings",
                                  "ratingCountV2": "25"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "79962328"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ],
                      "subtitleSuffix": {

                      },
                      "image": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/d24391fd-eaf6-47fc-a1ac-1ea2a323a079_1ee1b6a3-aef0-4d83-a519-1ecf9a5323ed.jpg",
                      "categoryId": "46597311"
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      "title": "Baked Snacks",
                      "itemCards": [
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "157575881",
                              "name": "Jain Peri-peri Cheese Crackers (zero Maida) (100gms)",
                              "category": "Baked Snacks",
                              "description": "Fresh Baked|Vegan| No Cholesterol",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/24/f260f0ab-1cec-4c64-a2c7-46e1712cfb83_ef02a607-4ad3-4f34-bf39-d98f4613a1d3.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 15625,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542457",
                                  "groupName": "Add Extras",
                                  "choices": [
                                    {
                                      "id": "132100017",
                                      "name": "Wholewheat Pesto Roll (zero Maida)",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100019",
                                      "name": "Fresh Salsa (jain)",
                                      "price": 28600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100012",
                                      "name": "Hazelnut Mousse",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100015",
                                      "name": "Brookie (box Of 2)",
                                      "price": 29700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100031",
                                      "name": "Korean Cheese Bun (jain)",
                                      "price": 18600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100034",
                                      "name": "Orange, Apricot & Chocolate",
                                      "price": 29700,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 6,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.7",
                                  "ratingCount": "11 ratings",
                                  "ratingCountV2": "11"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "94169404"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "136477609",
                              "name": "Bajra Rajgira Lavash- Sesame Seeds (100gms)",
                              "category": "Baked Snacks",
                              "description": "Fresh Baked|Vegan| No Cholesterol",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/24/32375185-aece-40c8-883e-a11f40fa39e2_d2fae7da-24ae-45da-8634-90e7249e41b1.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 14286,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542392",
                                  "groupName": "Add Extras",
                                  "choices": [
                                    {
                                      "id": "132100017",
                                      "name": "Wholewheat Pesto Roll (zero Maida)",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100019",
                                      "name": "Fresh Salsa (jain)",
                                      "price": 28600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100012",
                                      "name": "Hazelnut Mousse",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100015",
                                      "name": "Brookie (box Of 2)",
                                      "price": 29700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100031",
                                      "name": "Korean Cheese Bun (jain)",
                                      "price": 18600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100034",
                                      "name": "Orange, Apricot & Chocolate",
                                      "price": 29700,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 6,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "32 ratings",
                                  "ratingCountV2": "32"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "79962301"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "82916921",
                              "name": "Bajra Rajgira Lavash- Beetroot (100gms)",
                              "category": "Baked Snacks",
                              "description": "Fresh Baked|Vegan| No Cholesterol",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/24/0456cece-f6f2-4395-87ae-10289c2fa2a5_f43a6b5d-3306-4ec0-bed5-91eab6a9f58f.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 14286,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542559",
                                  "groupName": "Add Extras",
                                  "choices": [
                                    {
                                      "id": "132100017",
                                      "name": "Wholewheat Pesto Roll (zero Maida)",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100019",
                                      "name": "Fresh Salsa (jain)",
                                      "price": 28600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100012",
                                      "name": "Hazelnut Mousse",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100015",
                                      "name": "Brookie (box Of 2)",
                                      "price": 29700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100031",
                                      "name": "Korean Cheese Bun (jain)",
                                      "price": 18600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100034",
                                      "name": "Orange, Apricot & Chocolate",
                                      "price": 29700,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 6,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "isGuiltfree": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.7",
                                  "ratingCount": "110 ratings",
                                  "ratingCountV2": "110"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "2023981"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "82916918",
                              "name": "Bajra Jowar Pizza Chips (100gms)",
                              "category": "Baked Snacks",
                              "description": "Fresh Baked|Vegan| No Cholesterol",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/24/7b7d2e23-1d65-43a0-91d0-4aed75c42817_0f41e0ae-d1a1-4b56-8369-2b2bc40b95b7.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 14286,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542439",
                                  "groupName": "Add Extras",
                                  "choices": [
                                    {
                                      "id": "132100017",
                                      "name": "Wholewheat Pesto Roll (zero Maida)",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100019",
                                      "name": "Fresh Salsa (jain)",
                                      "price": 28600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100012",
                                      "name": "Hazelnut Mousse",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100015",
                                      "name": "Brookie (box Of 2)",
                                      "price": 29700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100031",
                                      "name": "Korean Cheese Bun (jain)",
                                      "price": 18600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100034",
                                      "name": "Orange, Apricot & Chocolate",
                                      "price": 29700,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 6,
                                  "maxFreeAddons": -1
                                },
                                {
                                  "groupId": "199524469",
                                  "groupName": "Extra Add",
                                  "choices": [
                                    {
                                      "id": "133405526",
                                      "name": "Hazelnut Mousse",
                                      "price": 16525,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "133405527",
                                      "name": "Brookies Box - Pack Of 2",
                                      "price": 29661,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "133405530",
                                      "name": "Glutenfree Almond Cupcake- Pack Of 6",
                                      "price": 25339,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "133405531",
                                      "name": "Assorted Brownie Box - Pack Of 4",
                                      "price": 42288,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "133405529",
                                      "name": "Choco-shots (lemon)",
                                      "price": 10593,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "133405532",
                                      "name": "Choco-shots (cinnamon)",
                                      "price": 10593,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "133405533",
                                      "name": "Choco-shots (mint)",
                                      "price": 10593,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "133405528",
                                      "name": "Choco-shots (bubblegum)",
                                      "price": 10593,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 8,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "isGuiltfree": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.9",
                                  "ratingCount": "97 ratings",
                                  "ratingCountV2": "97"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "36886430"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "82916941",
                              "name": "Jowar Rice Pita Chips (100gms)",
                              "category": "Baked Snacks",
                              "description": "Fresh Baked|Vegan| No Cholesterol",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/3/24/a3414f68-963d-4431-88ac-63440beeb03c_cc5a0f52-8aec-43d8-bb20-aa86d18f6df0.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 14286,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542502",
                                  "groupName": "Add Extras",
                                  "choices": [
                                    {
                                      "id": "132100017",
                                      "name": "Wholewheat Pesto Roll (zero Maida)",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100019",
                                      "name": "Fresh Salsa (jain)",
                                      "price": 28600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100012",
                                      "name": "Hazelnut Mousse",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100015",
                                      "name": "Brookie (box Of 2)",
                                      "price": 29700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100031",
                                      "name": "Korean Cheese Bun (jain)",
                                      "price": 18600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100034",
                                      "name": "Orange, Apricot & Chocolate",
                                      "price": 29700,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 6,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "isGuiltfree": true,
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.8",
                                  "ratingCount": "120 ratings",
                                  "ratingCountV2": "120"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "36886443"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        },
                        {
                          "card": {
                            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            "info": {
                              "id": "136477614",
                              "name": "Makai Jowar Nachos- Jeera (100gms)",
                              "category": "Baked Snacks",
                              "description": "Fresh Baked|Vegan| No Cholesterol",
                              "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/12/11/c97fe3de-4596-4948-9556-4b72bbd9d374_e4efe64c-6093-455b-84b1-49558f3dec22.jpg",
                              "inStock": 1,
                              "isVeg": 1,
                              "price": 14286,
                              "variants": {

                              },
                              "variantsV2": {

                              },
                              "addons": [
                                {
                                  "groupId": "195542572",
                                  "groupName": "Add Extras",
                                  "choices": [
                                    {
                                      "id": "132100017",
                                      "name": "Wholewheat Pesto Roll (zero Maida)",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100019",
                                      "name": "Fresh Salsa (jain)",
                                      "price": 28600,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100012",
                                      "name": "Hazelnut Mousse",
                                      "price": 16500,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100015",
                                      "name": "Brookie (box Of 2)",
                                      "price": 29700,
                                      "inStock": 1,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100031",
                                      "name": "Korean Cheese Bun (jain)",
                                      "price": 18600,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    },
                                    {
                                      "id": "132100034",
                                      "name": "Orange, Apricot & Chocolate",
                                      "price": 29700,
                                      "isVeg": 1,
                                      "isEnabled": 1
                                    }
                                  ],
                                  "maxAddons": 6,
                                  "maxFreeAddons": -1
                                }
                              ],
                              "itemAttribute": {
                                "vegClassifier": "VEG"
                              },
                              "ribbon": {

                              },
                              "type": "ITEM",
                              "itemBadge": {

                              },
                              "badgesV2": {

                              },
                              "ratings": {
                                "aggregatedRating": {
                                  "rating": "4.3",
                                  "ratingCount": "29 ratings",
                                  "ratingCountV2": "29"
                                },
                                "ratingsPresentationConfig": {
                                  "bgGradient": {
                                    "colours": [
                                      "#C8F9E5",
                                      "#FFFFFF"
                                    ],
                                    "gradientDirection": "GRADIENT_DIRECTION_LEFT_TO_RIGHT"
                                  },
                                  "ratingIconColor": "rating_very_good",
                                  "ratingTextColor": "rating_very_good",
                                  "ratingCountTextColor": "rating_very_good",
                                  "ratingFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
                                  "ratingCountFontName": "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD"
                                }
                              },
                              "parentId": "36886450"
                            },
                            "analytics": {

                            },
                            "hideRestaurantDetails": true
                          }
                        }
                      ],
                      "subtitleSuffix": {

                      },
                      "image": "FOOD_CATALOG/IMAGES/CMS/2024/3/24/f260f0ab-1cec-4c64-a2c7-46e1712cfb83_ef02a607-4ad3-4f34-bf39-d98f4613a1d3.jpg",
                      "categoryId": "33507979"
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                      "type": "FSSAI",
                      "imageId": "fssai_final_edss9i",
                      "text": [
                        "License No. 21517006000096"
                      ]
                    }
                  }
                },
                {
                  "card": {
                    "card": {
                      "@type": "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                      "name": "Mer Konfekt",
                      "area": "Mahalaxmi",
                      "completeAddress": "G3, Shankar Mahal, Cumbala Hill, Mumbai, Maharashtra - 400026"
                    }
                  }
                }
              ]
            }
          }
        }
      }
    ],
    "firstOffsetRequest": true,
    "isQCLink": false
  },
  "tid": "3e5d21b2-81de-449e-9923-12eeed3d70f6",
  "sid": "nca47d47-6e4a-45c4-8891-cc9ed4e75ad5",
  "deviceId": "7bd04adc-0380-0d5d-52b9-70a5a2e217ea",
  "csrfToken": "pchRJmh6d26E-P-9mRm37UOTHH4J5HWIH_roA2uw"
  }
  ]
  // useEffect(()=>{
  //   setresinfo(fetchData[0]?.data?.cards[2]?.card?.card?.info)
  //   setdiscountdata(fetchData[0]?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers)
  //    let actualdata=(fetchData[0]?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards).filter(data=> data?.card?.card?.itemCards || data?.card?.card?.categories);
  // //   console.log(actualdata);
  //   setMenudata(actualdata);
  // },[])
  // setresinfo(fetchData[0]?.data?.cards[2]?.card?.card?.info)
   
  // useEffect(() => {
  //   async function fetchMenu() {
  //     const response = await fetch("/data-20251010203617.json"); // 👈 direct path from public
  //     const json = await response.json();
  //     console.log(json);
  //     // setMenu(json);
  //   }
  //   fetchMenu();
  // }, []);



  //   async function fetchMenu() {
  //   const data= await fetch(`http://localhost:5001/api/menu/${mainid}?lat=${lat}&lng=${lng}`)
  //   const res= await data.json()
  //   console.log(res)
  //   // setresinfo(res?.data?.cards[2]?.card?.card?.info);

  //   // setdiscountdata(res?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers)
  //   // let actualdata=(res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards).filter(data=> data?.card?.card?.itemCards || data?.card?.card?.categories);
  //   // console.log(actualdata);
  //   // setMenudata(actualdata);
  //   // setMenudata(res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR);
  //   // console.log(res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card?.itemCards)
  //   // console.log(res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[9]?.card?.card?.title)
  //   // console.log(res?.data?.cards[4])
  //   // console.log(res)
  //   // setMenudata(res?.data?.cards[0]?.card?.card?.text)
  //   // console.log(res);
  // }
  

  // useEffect(() => {
  //   fetchMenu();
  // },[]);

   function handlenext()
    {
       val >= 130 ?" ": setval((prev)=>prev + 52)
       console.log(val)
    }
    function handleprev()
    {
     val == 0 ?" " : setval((prev)=>prev - 52)
      console.log(val)
    }

  return (
    <div className="w-[95%] md:w-[800px] h-[300px] mx-auto pt-7">
      {/* {menudata}  {mainid}  */}
      <p className="text-[12px] text-slate-500 cursor-pointer "> <Link to={"/"}><span className="hover:text-slate-700">Home</span></Link> / <Link><span className="hover:text-slate-700 cursor-pointer"> {resinfo?.city}</span></Link> / <Link><span className="hover:text-slate-700 cursor-pointer">{resinfo?.name} </span></Link> </p>
      <h1 className="font-bold text-[28px]">{resinfo?.name}</h1>
      <div className="w-full h-[180px] p-5 bg-gradient-to-t from-slate-400/70  rounded-[30px]  mt-3">
        <div className="w-ful p-5 border border-slate-400/70 rounded-[30px] h-full bg-white ">
          <div className="flex gap-1 font-semibold">
              <i className="fi text-green-800 fi-ss-circle-star"></i>
              <span>{resinfo?.avgRating}</span>
              <span>({resinfo?.totalRatingsString})</span>
              •
              <span>{resinfo?.costForTwoMessage}</span>
          </div>
          <p className="text-[#FF5200] underline text-[14px] ">{resinfo?.cuisines?.join(", ")}</p>
          <div className="flex gap-2 mt-2">
            <div className="w-[7px] flex flex-col justify-center items-center">
              <div className="w-[7px] h-[7px] bg-gray-500 rounded-full text-black"></div>
               <div className="w-[2px] h-[20px] bg-gray-500 rounded-full "></div>
              <div className="w-[7px] h-[7px] bg-gray-500 rounded-full text-black"></div>
            </div>
            <div className="flex flex-col gap-[1px] font-semibold ">
              <div className="flex gap-2 font-semibold text-[14px]">
                  <p>Outlet</p> <span className="text-gray-400">{resinfo?.locality}</span>
              </div>
              <p className="text-[14px]">{resinfo?.sla?.slaString}</p>
            </div>

             {/* <div className="flex gap-2">
              <p></p> <span>{resinfo.locality}</span>
             </div> */}

          </div>

          {/* <hr /> */}
          {/* <div className="flex ">
             <i className="fi w-[50px] fi-ts-biking"></i>
            hello
          </div> */}
        </div>
      </div>

        <div className="w-full mt-5 overflow-x-hidden">
          <div className='flex justify-between '>
           <h1 className='font-bold text-[21px] pl-2'>Deals for you</h1>
            <div className='flex gap-1 mt-1'>
              <div onClick={handleprev} className={`bg-gray-300 cursor-pointer w-8 h-8 rounded-full flex justify-center items-center ${val <= 0 ? "bg-gray-200 " : "bg-gray-300"}`}>
                <i className={`fi text-2xl mt-1 rounded-full fi-rr-arrow-small-left `+ (val<=0?"text-gray-400" :"text-gray-800")}></i>
              </div>
              <div onClick={handlenext} className={`bg-gray-300 cursor-pointer w-8 h-8 rounded-full flex justify-center items-center ${val >= 150 ? "bg-gray-200 " : "bg-gray-300"}`}>
                <i  className={`fi text-2xl mt-1 rounded-full fi-rr-arrow-small-right `+ (val>=150?"text-gray-400" :"text-gray-800")}></i>
              </div>
            </div>
            </div>
          <div style={{translate : `-${val}%`}} className='flex duration-1000 '>
              {
              discountdata?.map((value,id)=>(
  
                <div key={id} className="w-[328px] h-[76px]  m-2 flex flex-col justify-center items-center">
                  <div className="w-[302px] rounded-3xl flex border border-gray-400 ">
                    <img key={id} className='w-[65px] p-2' src={`https://media-assets.swiggy.com/swiggy/image/upload/${value?.info?.offerLogo}`} alt="" />
                    <div className="flex flex-col justify-center items-start">
                      <p className="text-[16px] font-semibold">{value?.info?.header}</p>
                      <p className="text-[14px] text-gray-500">{value?.info?.couponCode}</p>
                    </div>
                    
                  </div>
                </div>
                
              ))
            }
          </div>
        </div>


        <h2 className="font-semibold mt-5 text-gray-500 text-center">MENU</h2>
        <div className="relative mt-5 w-full">
        <div className="w-full p-2 font-semibold text-[14px] bg-slate-200 text-gray-500 text-center rounded-xl">Search for dishes</div>
         <p className="absolute cursor-pointer text-gray-500 right-3 -translate-y-[30px] "><i className="fi fi-rr-search"></i></p>
         <div className=" mt-20 bg-slate-200  h-[1px]"><hr /></div>
        </div>
        

        <div className="mt-10">
          {
            menudata?.map(({card:{card},id})=>(
              <MenuCard card={card} resinfo={resinfo}/>
            ))
          }
        </div>
    </div>
  ) 
}

function MenuCard({card,resinfo}){
  // console.log(resinfo)
  // console.log(card)
  let hello=false;
  if(card["@type"])
  {
    hello=true;
  }
  const [isopen,setisopen]=useState(hello);
  // console.log(isopen)
    function toggledropdown(i)
    {
      setisopen((prev)=>!prev)
    }
  if(card.itemCards){
    const {title,itemCards}=card;
    return(
      <>
      <div>
        <div className="flex justify-between">
          <h1 className="font-bold">{title}{" "}   {itemCards?.length > 0 ? `(${itemCards.length})` : ""}</h1>
          <i className={"fi fi-rs-angle-small-" + (isopen ? "up" : "down") } onClick={toggledropdown}></i>
        </div>
        {
          isopen &&
          <DetailMenu itemCards={itemCards} resinfo={resinfo}/>
        }
      </div>
       <div className={`my-5 bg-gray-300 ${card["@type"] ? "h-[10px]" : "h-[4px]"}`} />
      </>
    )

  }
  else{
    const {title,categories}=card;
    return(
      <div>
        <h1 className="font-bold text-[18px]">{card.title}</h1> 
        {
          categories.map((data)=>(
            <div className="mt-3">
              <MenuCard card={data} resinfo={resinfo} />
            </div>
          ))
          
        }
      </div>
    )
  }
}

function DetailMenu({itemCards,resinfo}){
  // console.log(resinfo)
  // console.log(itemCards)
  return(
    <div>
      {
        itemCards?.map(({card:{info}})=>(
          <DetailMenuCard info={info} resinfo={resinfo} />
        ))
      }
    </div>
  )
}


function DetailMenuCard({info,resinfo}){
  // console.log(resinfo)
  const{name,price,imageId,defaultPrice,description,itemAttribute:{vegClassifier},ratings:{aggregatedRating:{rating,ratingCountV2}}}=info;
  const cartData=useSelector((state)=>state.cartslice.cartItems)
  const getresinfofromlocalstorage=useSelector((state)=>state.cartslice.resInfo)
  const [isdiffRes,setisdiffRes]=useState(false);
//  console.log(getresinfofromlocalstorage)
 const dispatch=useDispatch(); 
 function handlecart()
  {
    // console.log(info)
    const isAdded=cartData.find((data)=>data.id===info.id)
    // let getresinfofromlocalstorage=JSON.parse(localStorage.getItem("resInfo")) || [];
    if(!isAdded)
    {
      if(getresinfofromlocalstorage.name===resinfo.name || getresinfofromlocalstorage.length===0)
      {
        // setCartData((prev)=>[...prev,info])
        // localStorage.setItem("cartData",JSON.stringify([...cartData,info]))
        // localStorage.setItem("resInfo",JSON.stringify(resinfo));
        dispatch(addtocart({info,resinfo}))
        toast.success("item added")
      }else{
        // alert("different restaurant item")
        toast.error("different restaurant item")
        setisdiffRes((prev)=>!prev)
      }
  
    }
    else{
      // alert("Already Added")
      toast.error("Already Added")
    }
  }
  function handleisdiffRes(){
    setisdiffRes((prev)=>!prev)
  }
  function handletoClearcart()
  {
    dispatch(clearcart())
    setisdiffRes((prev)=>!prev)
    toast.success("Know Cart Is Clear")
  }

  let veg="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Indian-vegetarian-mark.svg/768px-Indian-vegetarian-mark.svg.png"
  let nonveg="https://freesvg.org/img/1531813245.png"
  return(
    <div className="mt-3 relative">
        {/* info?.map(({name,price,imageId,defaultPrice,description,itemAttribute:{vegClassifier},ratings:{aggregatedRating:{rating,ratingCountV2}}})=>() */}
          <>
          <div className="w-full flex justify-between">
            <div className="w-[55%] md:w-[70%] flex flex-col gap-1">
                <img className="w-5 rounded-[2px]" src={(vegClassifier === "VEG" ? veg : nonveg)} alt=""/>
                <h2 className="text-[18px] font-semibold text-[#4e535a]">{name}</h2>
                <h1 className="font-semibold text-gray-900 text-[16px]">₹{price/100 || defaultPrice/100}</h1>
                {
                  rating ? <div className="flex gap-1">
                  <p className={rating > 4.5 ? "text-red-600":"mt-[2px]  text-green-600"}><i className="fi fi-ss-star"></i> </p>
                  <h1><span className={rating > 4.5 ? "text-red-600 "  : "text-green-600"}>{rating} </span>({ratingCountV2}) </h1>
                </div>: " "
                }
            
                <p className="text-[#4c4949] line-clamp-2">{description}</p>
            </div>
            <div className="w-[40%] md:w-[20%] h-[196px] relative">
              <img className="rounded-xl aspect-square" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/`+ imageId} alt="" />
              <button onClick={handlecart} className="bg-white absolute bottom-[30px] left-1/2 -translate-x-1/2 border px-8 py-2 drop-shadow rounded-xl font-bold text-green-700 hover:bg-gray-300">ADD</button>
            </div>
          </div>
          <hr className="my-5" />
          {
            isdiffRes && (
              <div className="w-[520px] h-[204px] left-[32%] shadow-sm fixed bottom-5 z-50 bg-white flex justify-center items-center">
                <div className="w-[465px] flex flex-col gap-2 justify-center">
                  <p className="font-bold text-[20px]">Items already in cart</p>
                  <div className="text-[15px]"> 
                  <p>Your cart contains items from other restaurant.Would you like to reset</p> 
                  <p>your cart for adding items from this restaurant?</p>
                  </div>

                  <div className="flex justify-between">
                    <button onClick={handleisdiffRes} className="w-[200px] py-2 font-bold border-2 border-[#1ba673] text-[#1ba673]">NO</button>
                    <button onClick={handletoClearcart} className=" w-[200px] py-2 bg-[#1ba673] font-bold text-white">YES START AFRESH</button>
                  </div>
                </div>
              </div>
            )
          }
          </>
    </div>
  )
}

export default RestaurantMenu;
