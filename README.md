# JSON to CSV Module

## Usage Example without pm2

```

deno run --allow-net --allow-read https://raw.githubusercontent.com/michael-spengler/json-to-csv/master/server/json-to-excel-server.ts 
<!-- deno run --allow-net https://deno.land/x/json-to-csv/server/json-to-excel-server.ts  -->

```

## Usage Example with pm2

```

pm2 start server/json-to-excel-server.ts  --interpreter="deno" --interpreter-args="run --allow-net --allow-read --reload"

```

## Contributions are welcome
Feel free to create a pull request if you would like to improve things.