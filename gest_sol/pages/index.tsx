import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block text-center justify-center">
          <h1 className={title()}>Portal de solicitudes de clientes</h1>

          <br />

          <h4 className={subtitle({ class: "mt-4" })}>
            Sistema de registro y control de solicitudes y requerimientos
          </h4>
        </div>
      </section>
      <div className="flex flex-col items-center space-y-8 mt-8">
        <h2 className="text-2xl font-bold text-pink-500">Opciones disponibles</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    
          <Link href="/gestion/nuevo">
            <Card isFooterBlurred radius="lg" className="border-none flex">
              <Image
                alt="Nueva solcitud"
                className="object-cover"
                height={200}
                src="./nueva_sol.png"
                width={200}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny font-bold ">
                  Registrar nueva solicitud
                </p>
                <Button
                  className="text-tiny text-white bg-black/20"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  ir
                </Button>
              </CardFooter>
            </Card>
          </Link>
          {/* fin de nueva solicitud */}

          <Link href="/gestion/solactivas">
            <Card isFooterBlurred radius="lg" className="border-none flex">
              <Image
                alt="Solicitudes abiertas"
                className="object-cover"
                height={200}
                src="./gestion_sol.png"
                width={200}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny font-bold ">
                  Consultar solicitudes abiertas
                </p>
                <Button
                  className="text-tiny text-white bg-black/20"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  ir
                </Button>
              </CardFooter>
            </Card>
          </Link>
          {/* fin de solicitudes abiertas */}

          <Link href="/gestion/historico">
            <Card isFooterBlurred radius="lg" className="border-none">
              <Image
                alt="Historico"
                className="object-cover"
                height={200}
                src="./planes_sol.png"
                width={200}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny font-bold ">Historial de solicitudes</p>
                <Button
                  className="text-tiny text-white bg-black/20"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  ir
                </Button>
              </CardFooter>
            </Card>
          </Link>
          {/* fin de solicitudes historicas */}

          <Link href="/gestion/plansoporte">
            <Card isFooterBlurred radius="lg" className="border-none">
              <Image
                alt="Plan de soporte"
                className="object-cover"
                height={200}
                src="./plan_soporte_sol.png"
                width={200}
              />
              <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
                <p className="text-tiny font-bold ">
                  Gestionar plan de soporte
                </p>
                <Button
                  className="text-tiny text-white bg-black/20"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  ir
                </Button>
              </CardFooter>
            </Card>
          </Link>
          {/* fin de solicitudes abiertas */}
        </div>
      </div>
      {/* fin de div principal */}
    </DefaultLayout>
  );
}
