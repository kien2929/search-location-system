## API Document

### Store APIS: `/v1/stores`

#### Create store

<details>
 <summary><code>POST</code> <code><b>/v1/stores</b></code></summary>

##### Request

Body

> | name      | type     | data type | description |
> | --------- | -------- | --------- | ----------- |
> | name      | required | string    | N/A         |
> | type      | required | integer   | N/A         |
> | latitude  | required | float     | N/A         |
> | longitude | required | float     | N/A         |

##### Responses

> | http code | response                                             |
> | --------- | ---------------------------------------------------- |
> | `200`     | `OK`                                                 |
> | `400`     | `{ errors: [{"code":"400","message":"Bad Request"}]` |

</details>

#### Search nearby store by radius

<details>
 <summary><code>GET</code> <code><b>/v1/stores/nearby</b></code> <code></code></summary>

##### Request

Query

> | name      | type     | data type | description |
> | --------- | -------- | --------- | ----------- |
> | distance  | required | integer   | N/A         |
> | latitude  | required | float     | N/A         |
> | longitude | required | float     | N/A         |

##### Responses

> | http code | response                                                                                         |
> | --------- | ------------------------------------------------------------------------------------------------ |
> | `200`     | `[{"id":1,"name":"Store 1","type":4,"latitude":17.0246,"longitude":-19.2765,"distance":76.977}]` |
> | `400`     | `{ errors: [{"code":"400","message":"Bad Request"}]`                                             |

</details>

#### Search store by name and type

<details>
 <summary><code>GET</code> <code><b>/v1/stores/search</b></code> <code></code></summary>

##### Request

Query

> | name | type     | data type | description |
> | ---- | -------- | --------- | ----------- |
> | name | required | string    | N/A         |
> | type | required | integer   | N/A         |

##### Responses

> | http code | response                                                                                         |
> | --------- | ------------------------------------------------------------------------------------------------ |
> | `200`     | `[{"id":1,"name":"Store 1","type":4,"latitude":17.0246,"longitude":-19.2765,"distance":76.977}]` |
> | `400`     | `{ errors: [{"code":"400","message":"Bad Request"}]`                                             |

</details>

### User APIS: `/v1/users`

### Get users

<details>
 <summary><code>GET</code> <code><b>/v1/users</b></code> <code></code></summary>

##### Responses

> | http code | response                                                                |
> | --------- | ----------------------------------------------------------------------- | --- |
> | `200`     | `[[{"id":1,"name":"George Zemlak","email":"Ross_Ziemann@hotmail.com"}]` |     |

</details>

### Get user's favorite stores

<details>
 <summary><code>GET</code> <code><b>/v1/users/:userId/favorite-stores</b></code> <code></code></summary>

##### Request

Param

> | name   | type     | data type | description |
> | ------ | -------- | --------- | ----------- |
> | userId | required | integer   | N/A         |

##### Responses

> | http code | response                                                                                    |
> | --------- | ------------------------------------------------------------------------------------------- |
> | `200`     | `[{"store":{"id":20,"name":"Roberts Inc","latitude":67.4371,"longitude":8.9098,"type":5}}]` |
> | `400`     | `{ errors: [{"code":"400","message":"Bad Request"}]`                                        |

</details>

### Add favorite store

<details>
 <summary><code>POST</code> <code><b>/v1/users/:userId/favorite-stores</b></code> <code></code></summary>

##### Request

Param

> | name   | type     | data type | description |
> | ------ | -------- | --------- | ----------- |
> | userId | required | integer   | N/A         |

Body

> | name    | type     | data type | description |
> | ------- | -------- | --------- | ----------- |
> | storeId | required | integer   | N/A         |

##### Responses

> | http code | response                                             |
> | --------- | ---------------------------------------------------- |
> | `200`     | `OK`                                                 |
> | `400`     | `{ errors: [{"code":"400","message":"Bad Request"}]` |

</details>

### Delete user's favorite store

<details>
 <summary><code>DELETE</code> <code><b>/v1/users/:userId/favorite-stores/:storeId</b></code> <code></code></summary>

##### Request

Param

> | name    | type     | data type | description |
> | ------- | -------- | --------- | ----------- |
> | userId  | required | integer   | N/A         |
> | storeId | required | integer   | N/A         |

##### Responses

> | http code | response                                             |
> | --------- | ---------------------------------------------------- |
> | `200`     | `OK`                                                 |
> | `400`     | `{ errors: [{"code":"400","message":"Bad Request"}]` |

</details>
