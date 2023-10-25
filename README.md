# cors-anywhere

servicio para evitar el problema de bloqueo de cors en la api de google maps

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Como usar esta wea

#### Get all items

```http
  GET https://cors-anywhere-cqg8.onrender.com/?location=23.7499549,-99.1264672&radius=50&key=[key]
```

| Parameter  | Type     | Description                            |
| :--------- | :------- | :------------------------------------- |
| `location` | `string` | **Required**. Coordenadas              |
| `radius`   | `string` | **Required**. Radio                    |
| `key`      | `string` | **Required**. Your API key google maps |
