export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "MSW Solicitudes",
	description: "Plataforma de Gestión",
	navItems: [
		{
			label: "Inicio",
			href: "/",
		},
    {
      label: "Nuevo",
      href: "/gestion/nuevo",
    },
    {
      label: "Solicitudes Activas",
      href: "/gestion/solactivas",
    },
    {
      label: "Histórico",
      href: "/gestion/historico",
    },

    {
      label: "Planes de soporte",
      href: "/gestion/plansoporte",
    },    

	],
	navMenuItems: [
		{
			label: "Inicio",
			href: "/",
		},
    {
      label: "Nuevo",
      href: "/gestion/nuevo",
    },
    {
      label: "Solicitudes Activas",
      href: "/solactivas",
    },
    {
      label: "Histórico",
      href: "/historico",
    },
    {
      label: "Planes de soporte",
      href: "/plansoporte",
    },    
	{
		label: "Cerrar Sesión",
		
	  },
	],
	links: {
		github: "https://github.com/jdicao",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui-docs-v2.vercel.app",
   
	},
};
