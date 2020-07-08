import { Application, send } from 'https://deno.land/x/oak/mod.ts'
import { green } from 'https://deno.land/std@0.53.0/fmt/colors.ts'
import { oakCors } from 'https://deno.land/x/cors/mod.ts'
import { httpPort, httpsPort } from './.env.ts'
import { pathToCert, pathToKey } from './.env.ts'

export class JSONToCSVServer {
    private static app = new Application()

    public static serve() {
        JSONToCSVServer.app.use(oakCors()) // Enable CORS for All Routes

        JSONToCSVServer.app.use(async (context, next) => {
            const key = context.request.url.searchParams.get('key')
            console.log(key)
            if (key === undefined || key === null) {
                const staticPath = `${Deno.cwd()}/server/assets`
                console.log(staticPath)


                await send(context, context.request.url.pathname, {
                    root: staticPath,
                    index: 'json-to-excel.html', 
                })
            } else if (key === '123') {
                next()
            } else {
                console.log('Feel free to me if you want to use my APIs.')
            }
        })

        console.log(httpPort)
        console.log(httpsPort)

        if (httpPort > 0) {
            console.log(`${green(`listening on port ${httpPort}`)}`)
            JSONToCSVServer.app.listen({ port: httpPort })
        }

        if (httpsPort > 0) {
            console.log(`${green(`listening on port ${httpsPort}`)}`)
            JSONToCSVServer.app.listen({
                port: httpsPort,
                secure: true,
                certFile: pathToCert,
                keyFile: pathToKey,
            })
        }

    }
}


JSONToCSVServer.serve()

