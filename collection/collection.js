{
	"info": {
		"_postman_id": "e69451dc-4bb7-4176-bb26-8f4c315ee94e",
		"name": "dmoney",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "29168446",
		"_collection_link": "https://dark-eclipse-519957.postman.co/workspace/Dmoney~3cef7207-461e-4fac-92ee-4c927c3ad2a2/collection/29168446-e69451dc-4bb7-4176-bb26-8f4c315ee94e?action=share&source=collection_link&creator=29168446"
	},
	"item": [
		{
			"name": "Test case 1",
			"item": [
				{
					"name": "Admin create an agent",
					"item": [
						{
							"name": "admin create an agent",
							"event": [
								{
									"listen": "prerequest",
									"script": {
										"exec": [
											"var prefix= \"0150\"\r",
											"var randomNumber= _.random(1000000,9999999)\r",
											"\r",
											"var phoneNumber= prefix+randomNumber;\r",
											"\r",
											"pm.collectionVariables.set(\"phoneNumber\",phoneNumber);"
										],
										"type": "text/javascript"
									}
								},
								{
									"listen": "test",
									"script": {
										"exec": [
											"var jsonData= pm.response.json();\r",
											"pm.test(\"Check if agent user is created\", function () {\r",
											"     jsonData = pm.response.json();\r",
											"    pm.expect(jsonData.message).to.contain(\"User created\")\r",
											"});\r",
											"\r",
											"pm.collectionVariables.set(\"agentID\", jsonData.user.id)\r",
											"pm.collectionVariables.set(\"agent name\", jsonData.user.name)\r",
											"pm.collectionVariables.set(\"agent email\", jsonData.user.email)\r",
											"pm.collectionVariables.set(\"agentphoneNumber\", jsonData.user.phone_number)\r",
											"\r",
											"pm.test(\"Status code is 201\", function () {\r",
											"    pm.response.to.have.status(201);\r",
											"});"
										],
										"type": "text/javascript"
									}
								}
							],
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Authorization",
										"value": "{{Token}}",
										"type": "text"
									},
									{
										"key": "X-AUTH-SECRET-KEY",
										"value": "{{partnerKey}}",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"name\":\"{{$randomFullName}}\",\r\n    \"email\":\"{{$randomEmail}}\",\r\n    \"password\":\"1234\",\r\n    \"phone_number\":\"{{phoneNumber}}\",\r\n    \"nid\":\"1234789428\",\r\n    \"role\":\"Agent\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "{{baseURL}}/user/create",
									"host": [
										"{{baseURL}}"
									],
									"path": [
										"user",
										"create"
									]
								}
							},
							"response": []
						},
						{
							"name": "admin create an agent with invalid phone number",
							"event": [
								{
									"listen": "prerequest",
									"script": {
										"exec": [
											"var prefix= \"01500\"\r",
											"var randomNumber= _.random(1000000,9999999)\r",
											"\r",
											"var InvalidPhoneNumber= prefix+randomNumber;\r",
											"\r",
											"pm.collectionVariables.set(\"InvalidPhoneNumber\",InvalidPhoneNumber);"
										],
										"type": "text/javascript"
									}
								},
								{
									"listen": "test",
									"script": {
										"exec": [
											"pm.test(\"Check is agent user create fail for invalid phone number\", function () {\r",
											"    var jsonData = pm.response.json();\r",
											"    pm.expect(jsonData.message).to.contain(\"length must be less than or equal to 11 characters long\");\r",
											"});\r",
											"\r",
											"pm.test(\"Status code is 400\", function () {\r",
											"    pm.response.to.have.status(400);\r",
											"});"
										],
										"type": "text/javascript"
									}
								}
							],
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Authorization",
										"value": "{{Token}}",
										"type": "text"
									},
									{
										"key": "X-AUTH-SECRET-KEY",
										"value": "{{partnerKey}}",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"name\":\"{{$randomFullName}}\",\r\n    \"email\":\"{{$randomEmail}}\",\r\n    \"password\":\"1234\",\r\n    \"phone_number\":\"{{InvalidPhoneNumber}}\",\r\n    \"nid\":\"1234789428\",\r\n    \"role\":\"Agent\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "{{baseURL}}/user/create",
									"host": [
										"{{baseURL}}"
									],
									"path": [
										"user",
										"create"
									]
								}
							},
							"response": []
						}
					]
				},
				{
					"name": "Admin create random customer",
					"item": [
						{
							"name": "admin create a customer",
							"event": [
								{
									"listen": "prerequest",
									"script": {
										"exec": [
											"var prefix= \"0150\"\r",
											"var randomNumber= _.random(1000000,9999999)\r",
											"\r",
											"var phoneNumber= prefix+randomNumber;\r",
											"\r",
											"pm.collectionVariables.set(\"phoneNumber\",phoneNumber);"
										],
										"type": "text/javascript"
									}
								},
								{
									"listen": "test",
									"script": {
										"exec": [
											"var jsonData= pm.response.json();\r",
											"pm.test(\"Check if customer 1 user is created\", function () {\r",
											"     jsonData = pm.response.json();\r",
											"    pm.expect(jsonData.message).to.contain(\"User created\")\r",
											"});\r",
											"\r",
											"pm.collectionVariables.set(\"customer1ID\", jsonData.user.id)\r",
											"pm.collectionVariables.set(\"customer1 name\", jsonData.user.name)\r",
											"pm.collectionVariables.set(\"customer1 email\", jsonData.user.email)\r",
											"pm.collectionVariables.set(\"customer1 phoneNumber\", jsonData.user.phone_number)\r",
											"\r",
											"pm.test(\"Status code is 201\", function () {\r",
											"    pm.response.to.have.status(201);\r",
											"});"
										],
										"type": "text/javascript"
									}
								}
							],
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Authorization",
										"value": "{{Token}}",
										"type": "text"
									},
									{
										"key": "X-AUTH-SECRET-KEY",
										"value": "{{partnerKey}}",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"name\":\"{{$randomFullName}}\",\r\n    \"email\":\"{{$randomEmail}}\",\r\n    \"password\":\"1234\",\r\n    \"phone_number\":\"{{phoneNumber}}\",\r\n    \"nid\":\"1234789428\",\r\n    \"role\":\"Customer\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "{{baseURL}}/user/create",
									"host": [
										"{{baseURL}}"
									],
									"path": [
										"user",
										"create"
									]
								}
							},
							"response": []
						},
						{
							"name": "admin create customer 2",
							"event": [
								{
									"listen": "prerequest",
									"script": {
										"exec": [
											"var prefix= \"0150\"\r",
											"var randomNumber= _.random(1000000,9999999)\r",
											"\r",
											"var phoneNumber= prefix+randomNumber;\r",
											"\r",
											"pm.collectionVariables.set(\"phoneNumber\",phoneNumber);"
										],
										"type": "text/javascript"
									}
								},
								{
									"listen": "test",
									"script": {
										"exec": [
											"var jsonData= pm.response.json();\r",
											"pm.test(\"Check if customer 2 user is created\", function () {\r",
											"     jsonData = pm.response.json();\r",
											"    pm.expect(jsonData.message).to.contain(\"User created\")\r",
											"});\r",
											"\r",
											"pm.collectionVariables.set(\"customer2ID\", jsonData.user.id)\r",
											"pm.collectionVariables.set(\"customer2 name\", jsonData.user.name)\r",
											"pm.collectionVariables.set(\"customer2 email\", jsonData.user.email)\r",
											"pm.collectionVariables.set(\"customer2 phoneNumber\", jsonData.user.phone_number)\r",
											"\r",
											"pm.test(\"Status code is 201\", function () {\r",
											"    pm.response.to.have.status(201);\r",
											"});"
										],
										"type": "text/javascript"
									}
								}
							],
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Authorization",
										"value": "{{Token}}",
										"type": "text"
									},
									{
										"key": "X-AUTH-SECRET-KEY",
										"value": "{{partnerKey}}",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"name\":\"{{$randomFullName}}\",\r\n    \"email\":\"{{$randomEmail}}\",\r\n    \"password\":\"1234\",\r\n    \"phone_number\":\"{{phoneNumber}}\",\r\n    \"nid\":\"1234789428\",\r\n    \"role\":\"Customer\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "{{baseURL}}/user/create",
									"host": [
										"{{baseURL}}"
									],
									"path": [
										"user",
										"create"
									]
								}
							},
							"response": []
						},
						{
							"name": "admin create a customer with invalid phone number",
							"event": [
								{
									"listen": "prerequest",
									"script": {
										"exec": [
											"var prefix= \"0150\"\r",
											"var randomNumber= _.random(1000000,9999999)\r",
											"\r",
											"var phoneNumber= prefix+randomNumber;\r",
											"\r",
											"pm.collectionVariables.set(\"phoneNumber\",phoneNumber);"
										],
										"type": "text/javascript"
									}
								},
								{
									"listen": "test",
									"script": {
										"exec": [
											"pm.test(\"Check is customer user create fail for invalid phone number\", function () {\r",
											"    var jsonData = pm.response.json();\r",
											"    pm.expect(jsonData.message).to.contain(\"length must be less than or equal to 11 characters long\");\r",
											"});\r",
											"\r",
											"pm.test(\"Status code is 400\", function () {\r",
											"    pm.response.to.have.status(400);\r",
											"});"
										],
										"type": "text/javascript"
									}
								}
							],
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Authorization",
										"value": "{{Token}}",
										"type": "text"
									},
									{
										"key": "X-AUTH-SECRET-KEY",
										"value": "{{partnerKey}}",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"name\":\"{{$randomFullName}}\",\r\n    \"email\":\"{{$randomEmail}}\",\r\n    \"password\":\"1234\",\r\n    \"phone_number\":\"{{InvalidPhoneNumber}}\",\r\n    \"nid\":\"1234789428\",\r\n    \"role\":\"Customer\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "{{baseURL}}/user/create",
									"host": [
										"{{baseURL}}"
									],
									"path": [
										"user",
										"create"
									]
								}
							},
							"response": []
						},
						{
							"name": "admin create a customer with empty field",
							"event": [
								{
									"listen": "prerequest",
									"script": {
										"exec": [
											""
										],
										"type": "text/javascript"
									}
								},
								{
									"listen": "test",
									"script": {
										"exec": [
											"pm.test(\"Check try to create customer with required field empty \", function () {\r",
											"    var jsonData = pm.response.json();\r",
											"    pm.expect(jsonData.message).to.contain(\"Required field empty\");\r",
											"});\r",
											"\r",
											"pm.test(\"Status code is 400\", function () {\r",
											"    pm.response.to.have.status(400);\r",
											"});"
										],
										"type": "text/javascript"
									}
								}
							],
							"request": {
								"method": "POST",
								"header": [
									{
										"key": "Authorization",
										"value": "{{Token}}",
										"type": "text"
									},
									{
										"key": "X-AUTH-SECRET-KEY",
										"value": "{{partnerKey}}",
										"type": "text"
									}
								],
								"body": {
									"mode": "raw",
									"raw": "{\r\n    \"name\":\"\",\r\n    \"email\":\"\",\r\n    \"password\":\"\",\r\n    \"phone_number\":\"\",\r\n    \"nid\":\"\",\r\n    \"role\":\"Customer\"\r\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "{{baseURL}}/user/create",
									"host": [
										"{{baseURL}}"
									],
									"path": [
										"user",
										"create"
									]
								}
							},
							"response": []
						}
					]
				}
			]
		},
		{
			"name": "Test case 2",
			"item": [
				{
					"name": "deposit from system to agent",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Check if deposit is successful\", function () {\r",
									"    var jsonData = pm.response.json();\r",
									"    pm.expect(jsonData.message).to.contain(\"Deposit successful\");\r",
									"});\r",
									"\r",
									"pm.test(\"Status code is 201\", function () {\r",
									"    pm.response.to.have.status(201);\r",
									"});"
								],
								"type": "text/javascript"
							}
						}
					],
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Authorization",
								"value": "{{Token}}",
								"type": "text"
							},
							{
								"key": "X-AUTH-SECRET-KEY",
								"value": "{{partnerKey}}",
								"type": "text"
							},
							{
								"key": "",
								"value": "",
								"type": "text",
								"disabled": true
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"from_account\":\"SYSTEM\",\r\n    \"to_account\":\"{{agentphoneNumber}}\",\r\n    \"amount\":5000\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{baseURL}}/transaction/deposit",
							"host": [
								"{{baseURL}}"
							],
							"path": [
								"transaction",
								"deposit"
							]
						}
					},
					"response": []
				},
				{
					"name": "deposit from system to invalid account",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"check deposit is fail for invalid account\", function () {\r",
									"    var jsonData = pm.response.json();\r",
									"    pm.expect(jsonData.message).to.contain(\"does not exist\");\r",
									"});\r",
									"\r",
									"pm.test(\"Status code is 404\", function () {\r",
									"    pm.response.to.have.status(404);\r",
									"});"
								],
								"type": "text/javascript"
							}
						}
					],
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Authorization",
								"value": "{{Token}}",
								"type": "text"
							},
							{
								"key": "X-AUTH-SECRET-KEY",
								"value": "{{partnerKey}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"from_account\":\"SYSTEM\",\r\n    \"to_account\":\"{{InvalidPhoneNumber}}\",\r\n    \"amount\":5000\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{baseURL}}/transaction/deposit",
							"host": [
								"{{baseURL}}"
							],
							"path": [
								"transaction",
								"deposit"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Test case 3",
			"item": [
				{
					"name": "agent deposit to customer",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Check if deposit is successful\", function () {\r",
									"    var jsonData = pm.response.json();\r",
									"    pm.expect(jsonData.message).to.contain(\"Deposit successful\");\r",
									"});\r",
									"\r",
									"pm.test(\"Status code is 201\", function () {\r",
									"    pm.response.to.have.status(201);\r",
									"});"
								],
								"type": "text/javascript"
							}
						}
					],
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Authorization",
								"value": "{{Token}}",
								"type": "text"
							},
							{
								"key": "X-AUTH-SECRET-KEY",
								"value": "{{partnerKey}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"from_account\":\"{{agentphoneNumber}}\",\r\n    \"to_account\":\"{{customer1 phoneNumber}}\",\r\n    \"amount\":2000\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{baseURL}}/transaction/deposit",
							"host": [
								"{{baseURL}}"
							],
							"path": [
								"transaction",
								"deposit"
							]
						}
					},
					"response": []
				},
				{
					"name": "agent deposit to customer with invalid amount",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Check deposit is fail for invalid amount\", function () {\r",
									"    var jsonData = pm.response.json();\r",
									"    pm.expect(jsonData.message).to.contain(\"Minimum deposit amount 10 tk and maximum deposit amount 10000 tk\");\r",
									"});\r",
									"\r",
									"pm.test(\"Status code is 400\", function () {\r",
									"    pm.response.to.have.status(400);\r",
									"});"
								],
								"type": "text/javascript"
							}
						}
					],
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Authorization",
								"value": "{{Token}}",
								"type": "text"
							},
							{
								"key": "X-AUTH-SECRET-KEY",
								"value": "{{partnerKey}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"from_account\":\"{{agentphoneNumber}}\",\r\n    \"to_account\":\"{{customer1 phoneNumber}}\",\r\n    \"amount\":-2000\r\n}\r\n",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{baseURL}}/transaction/deposit",
							"host": [
								"{{baseURL}}"
							],
							"path": [
								"transaction",
								"deposit"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Test case 4",
			"item": [
				{
					"name": "agent check balance",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Check if agent balance is display on screen\", function () {\r",
									"    var jsonData = pm.response.json();\r",
									"    pm.expect(jsonData.message).to.contain(\"User balance\");\r",
									"});\r",
									"\r",
									"pm.test(\"Status code is 200\", function () {\r",
									"    pm.response.to.have.status(200);\r",
									"});"
								],
								"type": "text/javascript"
							}
						}
					],
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "{{Token}}",
								"type": "text"
							},
							{
								"key": "X-AUTH-SECRET-KEY",
								"value": "{{partnerKey}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "{{baseURL}}/transaction/balance/{{agentphoneNumber}}",
							"host": [
								"{{baseURL}}"
							],
							"path": [
								"transaction",
								"balance",
								"{{agentphoneNumber}}"
							]
						}
					},
					"response": []
				},
				{
					"name": "agent can not check balance with invalid data",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Check if agent balance is not display for invalid agent phone number\", function () {\r",
									"    var jsonData = pm.response.json();\r",
									"    pm.expect(jsonData.message).to.contain(\"User not found\");\r",
									"});\r",
									"\r",
									"pm.test(\"Status code is 404\", function () {\r",
									"    pm.response.to.have.status(404);\r",
									"});"
								],
								"type": "text/javascript"
							}
						}
					],
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "{{Token}}",
								"type": "text"
							},
							{
								"key": "X-AUTH-SECRET-KEY",
								"value": "{{partnerKey}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "{{baseURL}}/transaction/balance/01722222228",
							"host": [
								"{{baseURL}}"
							],
							"path": [
								"transaction",
								"balance",
								"01722222228"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Test case 5",
			"item": [
				{
					"name": "customer withdraw money from agent",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Check if withdraw is successful\", function () {\r",
									"    var jsonData = pm.response.json();\r",
									"    pm.expect(jsonData.message).to.contain(\"Withdraw successful\");\r",
									"});\r",
									"\r",
									"pm.test(\"Status code is 201\", function () {\r",
									"    pm.response.to.have.status(201);\r",
									"});"
								],
								"type": "text/javascript"
							}
						}
					],
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Authorization",
								"value": "{{Token}}",
								"type": "text"
							},
							{
								"key": "X-AUTH-SECRET-KEY",
								"value": "{{partnerKey}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"from_account\":\"{{customer1 phoneNumber}}\",\r\n    \"to_account\":\"{{agentphoneNumber}}\",\r\n    \"amount\":200\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{baseURL}}/transaction/withdraw",
							"host": [
								"{{baseURL}}"
							],
							"path": [
								"transaction",
								"withdraw"
							]
						}
					},
					"response": []
				},
				{
					"name": "customer can not withdraw money from agent with insufficient balance",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Check if withdraw is fail for insufficient balance\", function () {\r",
									"    var jsonData = pm.response.json();\r",
									"    pm.expect(jsonData.message).to.contain(\"Insufficient balance\");\r",
									"});\r",
									"\r",
									"pm.test(\"Status code is 400\", function () {\r",
									"    pm.response.to.have.status(400);\r",
									"});"
								],
								"type": "text/javascript"
							}
						}
					],
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Authorization",
								"value": "{{Token}}",
								"type": "text"
							},
							{
								"key": "X-AUTH-SECRET-KEY",
								"value": "{{partnerKey}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"from_account\":\"01758888888\",\r\n    \"to_account\":\"{{agentphoneNumber}}\",\r\n    \"amount\":5000\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{baseURL}}/transaction/withdraw",
							"host": [
								"{{baseURL}}"
							],
							"path": [
								"transaction",
								"withdraw"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Test case 6",
			"item": [
				{
					"name": "customer check balance",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Check if customer balance is display on screen\", function () {\r",
									"    var jsonData = pm.response.json();\r",
									"    pm.expect(jsonData.message).to.contain(\"User balance\");\r",
									"});\r",
									"\r",
									"pm.test(\"Status code is 200\", function () {\r",
									"    pm.response.to.have.status(200);\r",
									"});"
								],
								"type": "text/javascript"
							}
						}
					],
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "{{Token}}",
								"type": "text"
							},
							{
								"key": "X-AUTH-SECRET-KEY",
								"value": "{{partnerKey}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "{{baseURL}}/transaction/balance/{{customer1 phoneNumber}}",
							"host": [
								"{{baseURL}}"
							],
							"path": [
								"transaction",
								"balance",
								"{{customer1 phoneNumber}}"
							]
						}
					},
					"response": []
				},
				{
					"name": "customer can not check balance with invalid data",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Check if customer balance is not display for invalid customer phone number\", function () {\r",
									"    var jsonData = pm.response.json();\r",
									"    pm.expect(jsonData.message).to.contain(\"User not found\");\r",
									"});\r",
									"\r",
									"pm.test(\"Status code is 404\", function () {\r",
									"    pm.response.to.have.status(404);\r",
									"});"
								],
								"type": "text/javascript"
							}
						}
					],
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "{{Token}}",
								"type": "text"
							},
							{
								"key": "X-AUTH-SECRET-KEY",
								"value": "{{partnerKey}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "{{baseURL}}/transaction/balance/01501127369",
							"host": [
								"{{baseURL}}"
							],
							"path": [
								"transaction",
								"balance",
								"01501127369"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Test case 7",
			"item": [
				{
					"name": "customer send money to other customer",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Check if send money is successful\", function () {\r",
									"    var jsonData = pm.response.json();\r",
									"    pm.expect(jsonData.message).to.contain(\"Send money successful\");\r",
									"});\r",
									"\r",
									"pm.test(\"Status code is 201\", function () {\r",
									"    pm.response.to.have.status(201);\r",
									"});"
								],
								"type": "text/javascript"
							}
						}
					],
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Authorization",
								"value": "{{Token}}",
								"type": "text"
							},
							{
								"key": "X-AUTH-SECRET-KEY",
								"value": "{{partnerKey}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"from_account\":\"{{customer1 phoneNumber}}\",\r\n    \"to_account\":\"{{customer2 phoneNumber}}\",\r\n    \"amount\":800\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{baseURL}}/transaction/sendmoney",
							"host": [
								"{{baseURL}}"
							],
							"path": [
								"transaction",
								"sendmoney"
							]
						}
					},
					"response": []
				},
				{
					"name": "customer send money to non exist customer",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Check if send money is fail for invalid customer account\", function () {\r",
									"    var jsonData = pm.response.json();\r",
									"    pm.expect(jsonData.message).to.contain(\"Account does not exist\");\r",
									"});\r",
									"\r",
									"pm.test(\"Status code is 404\", function () {\r",
									"    pm.response.to.have.status(404);\r",
									"});"
								],
								"type": "text/javascript"
							}
						}
					],
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Authorization",
								"value": "{{Token}}",
								"type": "text"
							},
							{
								"key": "X-AUTH-SECRET-KEY",
								"value": "{{partnerKey}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"from_account\":\"{{customer1 phoneNumber}}\",\r\n    \"to_account\":\"01506964611\",\r\n    \"amount\":200\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{baseURL}}/transaction/sendmoney",
							"host": [
								"{{baseURL}}"
							],
							"path": [
								"transaction",
								"sendmoney"
							]
						}
					},
					"response": []
				},
				{
					"name": "customer send money to other customer with insufficient balance",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Check if send money is fail for insufficient balance\", function () {\r",
									"    var jsonData = pm.response.json();\r",
									"    pm.expect(jsonData.message).to.contain(\"Insufficient balance\");\r",
									"});\r",
									"\r",
									"pm.test(\"Status code is 400\", function () {\r",
									"    pm.response.to.have.status(400);\r",
									"});"
								],
								"type": "text/javascript"
							}
						}
					],
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Authorization",
								"value": "{{Token}}",
								"type": "text"
							},
							{
								"key": "X-AUTH-SECRET-KEY",
								"value": "{{partnerKey}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"from_account\":\"01758888888\",\r\n    \"to_account\":\"01506964617\",\r\n    \"amount\":10000\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{baseURL}}/transaction/sendmoney",
							"host": [
								"{{baseURL}}"
							],
							"path": [
								"transaction",
								"sendmoney"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Test case 8",
			"item": [
				{
					"name": "customer payment to the merchant",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Check if payment is successful \", function () {\r",
									"    var jsonData = pm.response.json();\r",
									"    pm.expect(jsonData.message).to.contain(\"Payment successful\");\r",
									"});\r",
									"\r",
									"pm.test(\"Status code is 201\", function () {\r",
									"    pm.response.to.have.status(201);\r",
									"});"
								],
								"type": "text/javascript"
							}
						}
					],
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Authorization",
								"value": "{{Token}}",
								"type": "text"
							},
							{
								"key": "X-AUTH-SECRET-KEY",
								"value": "{{partnerKey}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"from_account\":\"{{customer2 phoneNumber}}\",\r\n    \"to_account\":\"{{merchant}}\",\r\n    \"amount\":150\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{baseURL}}/transaction/payment",
							"host": [
								"{{baseURL}}"
							],
							"path": [
								"transaction",
								"payment"
							]
						}
					},
					"response": []
				},
				{
					"name": "customer payment with insufficient balance to the merchant",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Check if payment is fail for insufficient balance \", function () {\r",
									"    var jsonData = pm.response.json();\r",
									"    pm.expect(jsonData.message).to.contain(\"Insufficient balance\");\r",
									"});\r",
									"\r",
									"pm.test(\"Status code is 400\", function () {\r",
									"    pm.response.to.have.status(400);\r",
									"});"
								],
								"type": "text/javascript"
							}
						}
					],
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Authorization",
								"value": "{{Token}}",
								"type": "text"
							},
							{
								"key": "X-AUTH-SECRET-KEY",
								"value": "{{partnerKey}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"from_account\":\"01508283037\",\r\n    \"to_account\":\"01686606905\",\r\n    \"amount\":150\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{baseURL}}/transaction/payment",
							"host": [
								"{{baseURL}}"
							],
							"path": [
								"transaction",
								"payment"
							]
						}
					},
					"response": []
				},
				{
					"name": "customer payment with invalid amount to the merchant",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Check if payment is fail for invalid amount \", function () {\r",
									"    var jsonData = pm.response.json();\r",
									"    pm.expect(jsonData.message).to.contain(\"Minimum Payment amount 10 tk\");\r",
									"});\r",
									"\r",
									"pm.test(\"Status code is 400\", function () {\r",
									"    pm.response.to.have.status(400);\r",
									"});"
								],
								"type": "text/javascript"
							}
						}
					],
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "Authorization",
								"value": "{{Token}}",
								"type": "text"
							},
							{
								"key": "X-AUTH-SECRET-KEY",
								"value": "{{partnerKey}}",
								"type": "text"
							}
						],
						"body": {
							"mode": "raw",
							"raw": "{\r\n    \"from_account\":\"{{customer2 phoneNumber}}\",\r\n    \"to_account\":\"{{merchant}}\",\r\n    \"amount\":-150\r\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{baseURL}}/transaction/payment",
							"host": [
								"{{baseURL}}"
							],
							"path": [
								"transaction",
								"payment"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Test case 9",
			"item": [
				{
					"name": "customer check balance",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Check if customer balance is display on screen\", function () {\r",
									"    var jsonData = pm.response.json();\r",
									"    pm.expect(jsonData.message).to.contain(\"User balance\");\r",
									"});\r",
									"\r",
									"pm.test(\"Status code is 200\", function () {\r",
									"    pm.response.to.have.status(200);\r",
									"});"
								],
								"type": "text/javascript"
							}
						}
					],
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "{{Token}}",
								"type": "text"
							},
							{
								"key": "X-AUTH-SECRET-KEY",
								"value": "{{partnerKey}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "{{baseURL}}/transaction/balance/{{customer2 phoneNumber}}",
							"host": [
								"{{baseURL}}"
							],
							"path": [
								"transaction",
								"balance",
								"{{customer2 phoneNumber}}"
							]
						}
					},
					"response": []
				},
				{
					"name": "customer check balance with invalid data",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Check if customer balance is not display on screen\", function () {\r",
									"    var jsonData = pm.response.json();\r",
									"    pm.expect(jsonData.message).to.contain(\"User not found\");\r",
									"});\r",
									"\r",
									"pm.test(\"Status code is 404\", function () {\r",
									"    pm.response.to.have.status(404);\r",
									"});"
								],
								"type": "text/javascript"
							}
						}
					],
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "{{Token}}",
								"type": "text"
							},
							{
								"key": "X-AUTH-SECRET-KEY",
								"value": "{{partnerKey}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "{{baseURL}}/transaction/balance/01503715635",
							"host": [
								"{{baseURL}}"
							],
							"path": [
								"transaction",
								"balance",
								"01503715635"
							]
						}
					},
					"response": []
				},
				{
					"name": "customer check statement",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Check if customer statement is display on screen\", function () {\r",
									"    var jsonData = pm.response.json();\r",
									"    pm.expect(jsonData.message).to.contain(\"Transaction list\");\r",
									"});\r",
									"\r",
									"pm.test(\"Status code is 200\", function () {\r",
									"    pm.response.to.have.status(200);\r",
									"});"
								],
								"type": "text/javascript"
							}
						}
					],
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "{{Token}}",
								"type": "text"
							},
							{
								"key": "X-AUTH-SECRET-KEY",
								"value": "{{partnerKey}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "{{baseURL}}/transaction/statement/{{customer2 phoneNumber}}",
							"host": [
								"{{baseURL}}"
							],
							"path": [
								"transaction",
								"statement",
								"{{customer2 phoneNumber}}"
							]
						}
					},
					"response": []
				},
				{
					"name": "customer check statement with invalid data",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Check if customer statement is not display on screen\", function () {\r",
									"    var jsonData = pm.response.json();\r",
									"    pm.expect(jsonData.message).to.contain(\"User not found\");\r",
									"});\r",
									"\r",
									"pm.test(\"Status code is 404\", function () {\r",
									"    pm.response.to.have.status(404);\r",
									"});"
								],
								"type": "text/javascript"
							}
						}
					],
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "{{Token}}",
								"type": "text"
							},
							{
								"key": "X-AUTH-SECRET-KEY",
								"value": "{{partnerKey}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "{{baseURL}}/transaction/statement/01503715635",
							"host": [
								"{{baseURL}}"
							],
							"path": [
								"transaction",
								"statement",
								"01503715635"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Test case 10",
			"item": [
				{
					"name": "merchant check balance",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Check if merchant balance is display on screen\", function () {\r",
									"    var jsonData = pm.response.json();\r",
									"    pm.expect(jsonData.message).to.contain(\"User balance\");\r",
									"});\r",
									"\r",
									"pm.test(\"Status code is 200\", function () {\r",
									"    pm.response.to.have.status(200);\r",
									"});"
								],
								"type": "text/javascript"
							}
						}
					],
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "{{Token}}",
								"type": "text"
							},
							{
								"key": "X-AUTH-SECRET-KEY",
								"value": "{{partnerKey}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "{{baseURL}}/transaction/balance/{{merchant}}",
							"host": [
								"{{baseURL}}"
							],
							"path": [
								"transaction",
								"balance",
								"{{merchant}}"
							]
						}
					},
					"response": []
				},
				{
					"name": "merchant check balance with invalid data",
					"event": [
						{
							"listen": "test",
							"script": {
								"exec": [
									"pm.test(\"Check if merchant balance is not display on screen\", function () {\r",
									"    var jsonData = pm.response.json();\r",
									"    pm.expect(jsonData.message).to.contain(\"User not found\");\r",
									"});\r",
									"\r",
									"pm.test(\"Status code is 404\", function () {\r",
									"    pm.response.to.have.status(404);\r",
									"});"
								],
								"type": "text/javascript"
							}
						}
					],
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "Authorization",
								"value": "{{Token}}",
								"type": "text"
							},
							{
								"key": "X-AUTH-SECRET-KEY",
								"value": "{{partnerKey}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "{{baseURL}}/transaction/balance/01686606906",
							"host": [
								"{{baseURL}}"
							],
							"path": [
								"transaction",
								"balance",
								"01686606906"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "login token",
			"event": [
				{
					"listen": "test",
					"script": {
						"exec": [
							"var jsondata= pm.response.json();\r",
							"var token= jsondata.token;\r",
							"\r",
							"pm.collectionVariables.set(\"Token\",token);\r",
							"\r",
							"pm.test(\"Check user can login with valid credential\", function () \r",
							"{\r",
							"    var jsonData = pm.response.json();\r",
							"    pm.expect(jsonData.message).to.contain(\"Login successfully\");\r",
							"});\r",
							"\r",
							"pm.test(\"Status code is 200\", function () \r",
							"{\r",
							"    pm.response.to.have.status(200);\r",
							"});"
						],
						"type": "text/javascript"
					}
				}
			],
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "",
						"value": "",
						"type": "text"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\r\n    \"email\":\"admin@roadtocareer.net\",\r\n    \"password\":\"1234\"\r\n}",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{baseURL}}/user/login",
					"host": [
						"{{baseURL}}"
					],
					"path": [
						"user",
						"login"
					]
				}
			},
			"response": []
		}
	],
	"event": [
		{
			"listen": "prerequest",
			"script": {
				"type": "text/javascript",
				"exec": [
					""
				]
			}
		},
		{
			"listen": "test",
			"script": {
				"type": "text/javascript",
				"exec": [
					""
				]
			}
		}
	],
	"variable": [
		{
			"key": "Token",
			"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQHJvYWR0b2NhcmVlci5uZXQiLCJwYXNzd29yZCI6IjEyMzQiLCJpYXQiOjE2OTMyNTMxNjEsImV4cCI6MTY5MzI1NDk2MX0.BkVDIauM-ewbH8SE7AZe_J4UcPBNOm7NoKgnNUaXAnY"
		},
		{
			"key": "phoneNumber",
			"value": "01504383352"
		},
		{
			"key": "userID",
			"value": 24062
		},
		{
			"key": "user name",
			"value": "Essie VonRueden"
		},
		{
			"key": "user email",
			"value": "Wilhelmine.Sipes@gmail.com"
		},
		{
			"key": "user phoneNumber",
			"value": "01503431529"
		},
		{
			"key": "baseURL",
			"value": "http://dmoney.roadtocareer.net",
			"type": "string"
		},
		{
			"key": "InvalidPhoneNumber",
			"value": "015002178277"
		},
		{
			"key": "agentID",
			"value": 25161
		},
		{
			"key": "agent name",
			"value": "Mrs. Earl Borer"
		},
		{
			"key": "agent email",
			"value": "Jade81@hotmail.com"
		},
		{
			"key": "agentNumber",
			"value": "01504953950"
		},
		{
			"key": "customerID",
			"value": 24226
		},
		{
			"key": "customer name",
			"value": "Marie Cartwright MD"
		},
		{
			"key": "customer email",
			"value": "Hollie5@hotmail.com"
		},
		{
			"key": "customer phoneNumber",
			"value": "01508283037"
		},
		{
			"key": "customer1ID",
			"value": 25162
		},
		{
			"key": "customer1 name",
			"value": "Alberto Kohler"
		},
		{
			"key": "customer1 email",
			"value": "Sydney40@gmail.com"
		},
		{
			"key": "customer1 phoneNumber",
			"value": "01504497687"
		},
		{
			"key": "customer2ID",
			"value": 25163
		},
		{
			"key": "customer2 name",
			"value": "Tamara Thompson"
		},
		{
			"key": "customer2 email",
			"value": "Itzel73@gmail.com"
		},
		{
			"key": "customer2 phoneNumber",
			"value": "01502976438"
		},
		{
			"key": "partnerKey",
			"value": "ROADTOSDET",
			"type": "string"
		},
		{
			"key": "agent phoneNumber",
			"value": "01505311711"
		},
		{
			"key": "agentphoneNumber",
			"value": "01502894509"
		},
		{
			"key": "merchant",
			"value": "01686606905",
			"type": "string"
		}
	]
}