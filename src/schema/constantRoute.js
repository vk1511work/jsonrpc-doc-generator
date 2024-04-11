//Схемы документаций

// Domains
import schemaDomains from './openrpc.domains.json'
import schemaDomainsBonus from './domains/openrpc.bonus.json'
import schemaDomainsPersons from './domains/openrpc.persons.json'

// VH
import schemaVhSites from './openrpc.sites.json'
import schemaVhDiskUsage from './vh/utils/openrpc.diskusage.json'
import schemaVhHosting from './vh/openrpc.hosting.json'
import schemaVhSsl from './vh/openrpc.ssl.json'
import schemaVhBackup from './vh/openrpc.backup.json'
import schemaVhCrontab from './vh/openrpc.cron.json'
import schemaVhLoad from './vh/openrpc.load.json'
import schemaVhUtils from './vh/openrpc.utils.json'
import schemaVhTariff from './openrpc.tariff.json'
import schemaVhPartnerProgram from './vh/openrpc.partnerprogram.json'
import schemaVhReferralProgram from './vh/openrpc.referralprogram.json'

// VPS
import schemaVpsVps from './openrpc.vps.json'
import schemaVpsBackup from './vps/openrpc.backup.json'
import schemaVpsIp from './vps/openrpc.ip.json'
import schemaVpsSsl from './vps/openrpc.ssl.json'

import schemaPay from './openrpc.pay.json'

//Компоненты
import Instructions from "../Components/Main/organisms/Instructions";
import Examples from "../Components/Main/organisms/Examples";

export const constantRoute = [
    {
        id: "instructions_nav",
        name: "Инструкция",
        url: "/instructions",
        array: [],
        schema: null,
        component: Instructions,
    },
    {
        id: "examples_nav",
        name: "Примеры использования API",
        url: "/examples",
        array: [],
        schema: null,
        component: Examples,
    },
    {
        id: "vh_nav",
        name: "Виртуальный хостинг",
        url: "",
        array: [
            {
                id: "vh_nav_sites",
                name: "Сайты",
                url: "/vh/sites",
                schema: schemaVhSites
            },
            {
                id: "vh_nav_hosting",
                name: "Базы данных",
                url: "/vh/hosting",
                schema: schemaVhHosting
            },
            {
                id: "vh_nav_backup",
                name: "Бэкапы",
                url: "/vh/backup",
                schema: schemaVhBackup
            },
            {
                id: "vh_nav_ssl",
                name: "SSL",
                url: "/vh/ssl",
                schema: schemaVhSsl
            },
            {
                id: "vh_nav_tariff",
                name: "Тариф",
                url: "/vh/tariff",
                schema: schemaVhTariff
            },
            {
                id: "vh_nav_load",
                name: "Нагрузка",
                url: "/vh/load",
                schema: schemaVhLoad
            },
            {
                id: "vh_nav_utils",
                name: "SSH",
                url: "/vh/utils",
                schema: schemaVhUtils
            },
            {
                id: "vh_nav_diskUsage",
                name: "Квота",
                url: "/vh/disk-usage",
                schema: schemaVhDiskUsage
            },
            {
                id: "vh_nav_crontab",
                name: "Crontab",
                url: "/vh/cron",
                schema: schemaVhCrontab
            },
        ],
        schema: null,
    },
    {
        id: "vps_nav",
        name: "VPS",
        url: "",
        array: [
            {
                id: "vps_nav_vps",
                name: "Управление VPS",
                url: "/vps",
                schema: schemaVpsVps
            },
            {
                id: "vps_nav_backup",
                name: "Бэкапы",
                url: "/vps/backup",
                schema: schemaVpsBackup
            },
            {
                id: "vps_nav_ssl",
                name: "SSL",
                url: "/vps/ssl",
                schema: schemaVpsSsl
            },
            {
                id: "vps_nav_ip",
                name: "Локальная сеть",
                url: "/vps/ip",
                schema: schemaVpsIp
            },
        ],
        schema: null,
    },
    {
        id: "domains_nav",
        name: "Домены",
        url: "",
        array: [
            {
                id: "domains_nav_domains",
                name: "Домены",
                url: "/domains",
                schema: schemaDomains
            },
            {
                id: "domains_nav_bonus",
                name: "Доменные бонусы",
                url: "/domains/bonus",
                schema: schemaDomainsBonus
            },
            {
                id: "domains_nav_persons",
                name: "Доменные персоны",
                url: "/domains/persons",
                schema: schemaDomainsPersons
            },
        ],
        schema: null,
    },
    {
        id: "pp_nav",
        name: "Партнерская программа",
        url: "",
        array: [
            {
                id: "pp_nav_partnerProgram",
                name: "Партнерская программа",
                url: "/partner-program",
                schema: schemaVhPartnerProgram
            },
            {
                id: "pp_nav_referralProgram",
                name: "Реферальные сайты",
                url: "/referral-program",
                schema: schemaVhReferralProgram
            },
        ],
        schema: null,
    },
    {
        id: "pay_nav",
        name: "Оплата и финансы",
        url: "",
        array: [
            {
                id: "pay_nav_pay",
                name: "Оплата и финансы",
                url: "/pay",
                schema: schemaPay
            },
        ],
        schema: null,
    },
]