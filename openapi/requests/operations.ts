export const operations = {
    "get_v2-admin-transactions": {
        path: "/v2/admin/transactions",
        method: "get",
    },
    "post_v2-admin-transactions": {
        path: "/v2/admin/transactions",
        method: "post",
    },
    "get_v2-admin-transactions-id": {
        path: "/v2/admin/transactions/:id",
        method: "get",
    },
    "post_v2-admin-transactions-appeals-appellationid-accept": {
        path: "/v2/admin/transactions/appeals/:appellationId/accept",
        method: "post",
    },
    "post_v2-admin-transactions-appeals-appellationid-deny": {
        path: "/v2/admin/transactions/appeals/:appellationId/deny",
        method: "post",
    },
    "get_v2-admin-transactions-id-callbacks": {
        path: "/v2/admin/transactions/:id/callbacks",
        method: "get",
    },
    "get_v2-admin-transactions-id-messages": {
        path: "/v2/admin/transactions/:id/messages",
        method: "get",
    },
    "get_v2-admin-transactions-id-appeals": {
        path: "/v2/admin/transactions/:id/appeals",
        method: "get",
    },
    "get_v2-admin-transactions-id-changes": {
        path: "/v2/admin/transactions/:id/changes",
        method: "get",
    },
    "post_v2-admin-transactions-id-accept": {
        path: "/v2/admin/transactions/:id/accept",
        method: "post",
    },
    "post_v2-admin-transactions-id-decline": {
        path: "/v2/admin/transactions/:id/decline",
        method: "post",
    },
    "post_v2-admin-transactions-id-change-amount": {
        path: "/v2/admin/transactions/:id/change-amount",
        method: "post",
    },
    "post_v2-admin-transactions-id-rollback": {
        path: "/v2/admin/transactions/:id/rollback",
        method: "post",
    },
    "get_v2-admin-transaction-callbacks": {
        path: "/v2/admin/transaction-callbacks",
        method: "get",
    },
    "get_v2-admin-transaction-callbacks-id": {
        path: "/v2/admin/transaction-callbacks/:id",
        method: "get",
    },
    "post_v2-admin-transaction-callbacks-id-resend": {
        path: "/v2/admin/transaction-callbacks/:id/resend",
        method: "post",
    },
    "get_v2-admin-autocomplete-currencies": {
        path: "/v2/admin/autocomplete/currencies",
        method: "get",
    },
    "get_v2-admin-autocomplete-bank-accounts": {
        path: "/v2/admin/autocomplete/bank-accounts",
        method: "get",
    },
    "get_v2-admin-autocomplete-cards": {
        path: "/v2/admin/autocomplete/cards",
        method: "get",
    },
    "get_v2-admin-autocomplete-teams": {
        path: "/v2/admin/autocomplete/teams",
        method: "get",
    },
    "get_v2-admin-autocomplete-merchants": {
        path: "/v2/admin/autocomplete/merchants",
        method: "get",
    },
    "get_v2-admin-autocomplete-payment-providers": {
        path: "/v2/admin/autocomplete/payment-providers",
        method: "get",
    },
    "get_v2-admin-autocomplete-currency-rate-providers": {
        path: "/v2/admin/autocomplete/currency-rate-providers",
        method: "get",
    },
    "get_v2-admin-autocomplete-banks": {
        path: "/v2/admin/autocomplete/banks",
        method: "get",
    },
    "get_v2-admin-autocomplete-affiliates": {
        path: "/v2/admin/autocomplete/affiliates",
        method: "get",
    },
    "get_v2-admin-autocomplete-traffic-threads": {
        path: "/v2/admin/autocomplete/traffic-threads",
        method: "get",
    },
    "get_v2-admin-autocomplete-traffic-cascades": {
        path: "/v2/admin/autocomplete/traffic-cascades",
        method: "get",
    },
    "get_v2-admin-teams-teamid-withdrawal-policies": {
        path: "/v2/admin/teams/:teamId/withdrawal-policies",
        method: "get",
    },
    "post_v2-admin-teams-teamid-withdrawal-policies": {
        path: "/v2/admin/teams/:teamId/withdrawal-policies",
        method: "post",
    },
    "get_v2-admin-teams-teamid-withdrawal-policies-policyid": {
        path: "/v2/admin/teams/:teamId/withdrawal-policies/:policyId",
        method: "get",
    },
    "patch_v2-admin-teams-teamid-withdrawal-policies-policyid": {
        path: "/v2/admin/teams/:teamId/withdrawal-policies/:policyId",
        method: "patch",
    },
    "delete_v2-admin-teams-teamid-withdrawal-policies-policyid": {
        path: "/v2/admin/teams/:teamId/withdrawal-policies/:policyId",
        method: "delete",
    },
    "post_v2-admin-teams-teamid-withdrawal-policies-policyid-enable": {
        path: "/v2/admin/teams/:teamId/withdrawal-policies/:policyId/enable",
        method: "post",
    },
    "post_v2-admin-teams-teamid-withdrawal-policies-policyid-disable": {
        path: "/v2/admin/teams/:teamId/withdrawal-policies/:policyId/disable",
        method: "post",
    },
    "get_v2-admin-affiliate-merchant-policies": {
        path: "/v2/admin/affiliate-merchant-policies",
        method: "get",
    },
    "get_v2-admin-affiliates-affiliateid-merchant-policies": {
        path: "/v2/admin/affiliates/:affiliateId/merchant-policies",
        method: "get",
    },
    "post_v2-admin-affiliates-affiliateid-merchant-policies": {
        path: "/v2/admin/affiliates/:affiliateId/merchant-policies",
        method: "post",
    },
    "patch_v2-admin-affiliates-affiliateid-merchant-policies-merchantpolicyid":
        {
            path: "/v2/admin/affiliates/:affiliateId/merchant-policies/:merchantPolicyId",
            method: "patch",
        },
    "delete_v2-admin-affiliates-affiliateid-merchant-policies-merchantpolicyid":
        {
            path: "/v2/admin/affiliates/:affiliateId/merchant-policies/:merchantPolicyId",
            method: "delete",
        },
    "get_v2-admin-team-stat": {
        path: "/v2/admin/team-stat",
        method: "get",
    },
    "get_v2-admin-withdrawal-team-stat": {
        path: "/v2/admin/withdrawal-team-stat",
        method: "get",
    },
    "get_v2-admin-affiliates": {
        path: "/v2/admin/affiliates",
        method: "get",
    },
    "post_v2-admin-affiliates": {
        path: "/v2/admin/affiliates",
        method: "post",
    },
    "get_v2-admin-affiliates-id": {
        path: "/v2/admin/affiliates/:id",
        method: "get",
    },
    "patch_v2-admin-affiliates-id": {
        path: "/v2/admin/affiliates/:id",
        method: "patch",
    },
    "post_v2-admin-affiliates-id-keycloak-credentials": {
        path: "/v2/admin/affiliates/:id/keycloak-credentials",
        method: "post",
    },
    "get_v2-affiliate-team-policies": {
        path: "/v2/affiliate/team-policies",
        method: "get",
    },
    "get_v2-affiliate-merchant-policies": {
        path: "/v2/affiliate/merchant-policies",
        method: "get",
    },
    "get_v2-affiliate-team-report": {
        path: "/v2/affiliate/team-report",
        method: "get",
    },
    "get_v2-affiliate-team-stat": {
        path: "/v2/affiliate/team-stat",
        method: "get",
    },
    "get_v2-affiliate-merchant-stat": {
        path: "/v2/affiliate/merchant-stat",
        method: "get",
    },
    "get_v2-affiliate-merchant-report": {
        path: "/v2/affiliate/merchant-report",
        method: "get",
    },
    "get_v2-affiliate-status": {
        path: "/v2/affiliate/status",
        method: "get",
    },
    "get_v2-affiliate-withdrawal-requests": {
        path: "/v2/affiliate/withdrawal-requests",
        method: "get",
    },
    "post_v2-affiliate-withdrawal": {
        path: "/v2/affiliate/withdrawal",
        method: "post",
    },
    "get_v2-admin-affiliate-team-report": {
        path: "/v2/admin/affiliate-team-report",
        method: "get",
    },
    "get_v2-admin-affiliate-team-report-teamreportid": {
        path: "/v2/admin/affiliate-team-report/:teamReportId",
        method: "get",
    },
    "get_v2-admin-affiliate-merchant-report": {
        path: "/v2/admin/affiliate-merchant-report",
        method: "get",
    },
    "get_v2-admin-affiliate-merchant-report-merchantreportid": {
        path: "/v2/admin/affiliate-merchant-report/:merchantReportId",
        method: "get",
    },
    "get_v2-admin-affiliate-team-policies": {
        path: "/v2/admin/affiliate-team-policies",
        method: "get",
    },
    "get_v2-admin-affiliates-affiliateid-team-policies": {
        path: "/v2/admin/affiliates/:affiliateId/team-policies",
        method: "get",
    },
    "post_v2-admin-affiliates-affiliateid-team-policies": {
        path: "/v2/admin/affiliates/:affiliateId/team-policies",
        method: "post",
    },
    "patch_v2-admin-affiliates-affiliateid-team-policies-teampolicyid": {
        path: "/v2/admin/affiliates/:affiliateId/team-policies/:teamPolicyId",
        method: "patch",
    },
    "delete_v2-admin-affiliates-affiliateid-team-policies-teampolicyid": {
        path: "/v2/admin/affiliates/:affiliateId/team-policies/:teamPolicyId",
        method: "delete",
    },
    "get_v2-admin-affiliate-withdrawals": {
        path: "/v2/admin/affiliate-withdrawals",
        method: "get",
    },
    "get_v2-admin-affiliate-withdrawals-id": {
        path: "/v2/admin/affiliate-withdrawals/:id",
        method: "get",
    },
    "post_v2-admin-affiliate-withdrawals-id-cancel": {
        path: "/v2/admin/affiliate-withdrawals/:id/cancel",
        method: "post",
    },
    "post_v2-admin-affiliate-withdrawals-id-apply": {
        path: "/v2/admin/affiliate-withdrawals/:id/apply",
        method: "post",
    },
    "get_v2-admin-appeals": {
        path: "/v2/admin/appeals",
        method: "get",
    },
    "get_v2-admin-appeals-id": {
        path: "/v2/admin/appeals/:id",
        method: "get",
    },
    "post_v2-admin-appeals-id-accept": {
        path: "/v2/admin/appeals/:id/accept",
        method: "post",
    },
    "post_v2-admin-appeals-id-decline": {
        path: "/v2/admin/appeals/:id/decline",
        method: "post",
    },
    "get_v2-team-appeals": {
        path: "/v2/team/appeals",
        method: "get",
    },
    "get_v2-team-appeals-id": {
        path: "/v2/team/appeals/:id",
        method: "get",
    },
    "post_v2-team-appeals-id-accept": {
        path: "/v2/team/appeals/:id/accept",
        method: "post",
    },
    "post_v2-team-appeals-id-decline": {
        path: "/v2/team/appeals/:id/decline",
        method: "post",
    },
    "get_v2-merchant-appeals": {
        path: "/v2/merchant/appeals",
        method: "get",
    },
    "post_v2-merchant-appeals": {
        path: "/v2/merchant/appeals",
        method: "post",
    },
    "get_v2-merchant-appeals-id": {
        path: "/v2/merchant/appeals/:id",
        method: "get",
    },
    "get_v2-merchant-appeals-statuses": {
        path: "/v2/merchant/appeals/statuses",
        method: "get",
    },
    "post_v2-merchant-appeals-id-cancel": {
        path: "/v2/merchant/appeals/:id/cancel",
        method: "post",
    },
    "post_v2-team-automation": {
        path: "/v2/team/automation",
        method: "post",
    },
    "post_v2-team-ping": {
        path: "/v2/team/ping",
        method: "post",
    },
    "get_v2-admin-banks": {
        path: "/v2/admin/banks",
        method: "get",
    },
    "post_v2-admin-banks": {
        path: "/v2/admin/banks",
        method: "post",
    },
    "get_v2-admin-banks-bankid": {
        path: "/v2/admin/banks/:bankId",
        method: "get",
    },
    "patch_v2-admin-banks-bankid": {
        path: "/v2/admin/banks/:bankId",
        method: "patch",
    },
    "delete_v2-admin-banks-bankid": {
        path: "/v2/admin/banks/:bankId",
        method: "delete",
    },
    "get_v2-admin-cards": {
        path: "/v2/admin/cards",
        method: "get",
    },
    "get_v2-admin-cards-cardid": {
        path: "/v2/admin/cards/:cardId",
        method: "get",
    },
    "delete_v2-admin-cards-cardid": {
        path: "/v2/admin/cards/:cardId",
        method: "delete",
    },
    "get_v2-admin-cards-conversion": {
        path: "/v2/admin/cards/conversion",
        method: "get",
    },
    "post_v2-admin-cards-cardid-enable": {
        path: "/v2/admin/cards/:cardId/enable",
        method: "post",
    },
    "post_v2-admin-cards-cardid-disable": {
        path: "/v2/admin/cards/:cardId/disable",
        method: "post",
    },
    "post_v2-admin-cards-cardid-soft-delete": {
        path: "/v2/admin/cards/:cardId/soft-delete",
        method: "post",
    },
    "post_v2-admin-cards-cardid-restore": {
        path: "/v2/admin/cards/:cardId/restore",
        method: "post",
    },
    "post_v2-admin-cards-cardid-lock": {
        path: "/v2/admin/cards/:cardId/lock",
        method: "post",
    },
    "post_v2-admin-cards-cardid-unlock": {
        path: "/v2/admin/cards/:cardId/unlock",
        method: "post",
    },
    "post_v2-admin-cards-cardid-enable-sbp": {
        path: "/v2/admin/cards/:cardId/enable-sbp",
        method: "post",
    },
    "post_v2-admin-cards-cardid-disable-sbp": {
        path: "/v2/admin/cards/:cardId/disable-sbp",
        method: "post",
    },
    "get_v2-admin-bank-accounts": {
        path: "/v2/admin/bank-accounts",
        method: "get",
    },
    "get_v2-admin-bank-accounts-bankaccountid": {
        path: "/v2/admin/bank-accounts/:bankAccountId",
        method: "get",
    },
    "patch_v2-admin-bank-accounts-bankaccountid": {
        path: "/v2/admin/bank-accounts/:bankAccountId",
        method: "patch",
    },
    "delete_v2-admin-bank-accounts-bankaccountid": {
        path: "/v2/admin/bank-accounts/:bankAccountId",
        method: "delete",
    },
    "post_v2-admin-bank-accounts-bankaccountid-lock": {
        path: "/v2/admin/bank-accounts/:bankAccountId/lock",
        method: "post",
    },
    "post_v2-admin-bank-accounts-bankaccountid-unlock": {
        path: "/v2/admin/bank-accounts/:bankAccountId/unlock",
        method: "post",
    },
    "post_v2-admin-bank-accounts-bankaccountid-enable": {
        path: "/v2/admin/bank-accounts/:bankAccountId/enable",
        method: "post",
    },
    "post_v2-admin-bank-accounts-bankaccountid-disable": {
        path: "/v2/admin/bank-accounts/:bankAccountId/disable",
        method: "post",
    },
    "post_v2-admin-bank-accounts-bankaccountid-soft-delete": {
        path: "/v2/admin/bank-accounts/:bankAccountId/soft-delete",
        method: "post",
    },
    "post_v2-admin-bank-accounts-bankaccountid-restore": {
        path: "/v2/admin/bank-accounts/:bankAccountId/restore",
        method: "post",
    },
    "post_v2-admin-bank-accounts-bankaccountid-manual-confirm-enable": {
        path: "/v2/admin/bank-accounts/:bankAccountId/manual-confirm-enable",
        method: "post",
    },
    "post_v2-admin-bank-accounts-bankaccountid-manual-confirm-disable": {
        path: "/v2/admin/bank-accounts/:bankAccountId/manual-confirm-disable",
        method: "post",
    },
    "get_v2-team-bank-accounts": {
        path: "/v2/team/bank-accounts",
        method: "get",
    },
    "post_v2-team-bank-accounts": {
        path: "/v2/team/bank-accounts",
        method: "post",
    },
    "get_v2-team-bank-accounts-bankaccountid": {
        path: "/v2/team/bank-accounts/:bankAccountId",
        method: "get",
    },
    "patch_v2-team-bank-accounts-bankaccountid": {
        path: "/v2/team/bank-accounts/:bankAccountId",
        method: "patch",
    },
    "delete_v2-team-bank-accounts-bankaccountid": {
        path: "/v2/team/bank-accounts/:bankAccountId",
        method: "delete",
    },
    "post_v2-team-bank-accounts-bankaccountid-enable": {
        path: "/v2/team/bank-accounts/:bankAccountId/enable",
        method: "post",
    },
    "post_v2-team-bank-accounts-bankaccountid-disable": {
        path: "/v2/team/bank-accounts/:bankAccountId/disable",
        method: "post",
    },
    "post_v2-team-bank-accounts-bankaccountid-soft-delete": {
        path: "/v2/team/bank-accounts/:bankAccountId/soft-delete",
        method: "post",
    },
    "post_v2-team-bank-accounts-bankaccountid-restore": {
        path: "/v2/team/bank-accounts/:bankAccountId/restore",
        method: "post",
    },
    "post_v2-team-bank-accounts-bankaccountid-manual-confirm-enable": {
        path: "/v2/team/bank-accounts/:bankAccountId/manual-confirm-enable",
        method: "post",
    },
    "post_v2-team-bank-accounts-bankaccountid-manual-confirm-disable": {
        path: "/v2/team/bank-accounts/:bankAccountId/manual-confirm-disable",
        method: "post",
    },
    "get_v2-team-cards": {
        path: "/v2/team/cards",
        method: "get",
    },
    "post_v2-team-cards": {
        path: "/v2/team/cards",
        method: "post",
    },
    "get_v2-team-cards-cardid": {
        path: "/v2/team/cards/:cardId",
        method: "get",
    },
    "patch_v2-team-cards-cardid": {
        path: "/v2/team/cards/:cardId",
        method: "patch",
    },
    "delete_v2-team-cards-cardid": {
        path: "/v2/team/cards/:cardId",
        method: "delete",
    },
    "post_v2-team-cards-cardid-enable": {
        path: "/v2/team/cards/:cardId/enable",
        method: "post",
    },
    "post_v2-team-cards-cardid-disable": {
        path: "/v2/team/cards/:cardId/disable",
        method: "post",
    },
    "post_v2-team-cards-cardid-soft-delete": {
        path: "/v2/team/cards/:cardId/soft-delete",
        method: "post",
    },
    "post_v2-team-cards-cardid-restore": {
        path: "/v2/team/cards/:cardId/restore",
        method: "post",
    },
    "post_v2-team-cards-cardid-enable-sbp": {
        path: "/v2/team/cards/:cardId/enable-sbp",
        method: "post",
    },
    "post_v2-team-cards-cardid-disable-sbp": {
        path: "/v2/team/cards/:cardId/disable-sbp",
        method: "post",
    },
    "get_v2-admin-countries": {
        path: "/v2/admin/countries",
        method: "get",
    },
    "post_v2-admin-countries": {
        path: "/v2/admin/countries",
        method: "post",
    },
    "get_v2-admin-countries-countryid": {
        path: "/v2/admin/countries/:countryId",
        method: "get",
    },
    "patch_v2-admin-countries-countryid": {
        path: "/v2/admin/countries/:countryId",
        method: "patch",
    },
    "delete_v2-admin-countries-countryid": {
        path: "/v2/admin/countries/:countryId",
        method: "delete",
    },
    "get_v2-admin-currencies": {
        path: "/v2/admin/currencies",
        method: "get",
    },
    "post_v2-admin-currencies": {
        path: "/v2/admin/currencies",
        method: "post",
    },
    "get_v2-admin-currencies-currencyid": {
        path: "/v2/admin/currencies/:currencyId",
        method: "get",
    },
    "delete_v2-admin-currencies-currencyid": {
        path: "/v2/admin/currencies/:currencyId",
        method: "delete",
    },
    "get_v2-admin-daily-turnover": {
        path: "/v2/admin/daily-turnover",
        method: "get",
    },
    "get_v2-admin-daily-turnover-day": {
        path: "/v2/admin/daily-turnover/:day",
        method: "get",
    },
    "post_v2-admin-daily-turnover-day-generate": {
        path: "/v2/admin/daily-turnover/:day/generate",
        method: "post",
    },
    "post_v2-hunter-pay-callbacks": {
        path: "/v2/hunter-pay/callbacks",
        method: "post",
    },
    "post_v2-izi-pay-callbacks": {
        path: "/v2/izi-pay/callbacks",
        method: "post",
    },
    "get_v2-merchant-balance": {
        path: "/v2/merchant/balance",
        method: "get",
    },
    "get_v2-merchant-config": {
        path: "/v2/merchant/config",
        method: "get",
    },
    "patch_v2-merchant-config": {
        path: "/v2/merchant/config",
        method: "patch",
    },
    "get_v2-merchant-balance-deposits": {
        path: "/v2/merchant/balance-deposits",
        method: "get",
    },
    "post_v2-merchant-balance-deposits": {
        path: "/v2/merchant/balance-deposits",
        method: "post",
    },
    "get_v2-merchant-balance-deposits-id-status": {
        path: "/v2/merchant/balance-deposits/:id/status",
        method: "get",
    },
    "get_v2-merchant-balance-deposits-unpaid": {
        path: "/v2/merchant/balance-deposits/unpaid",
        method: "get",
    },
    "post_v2-merchant-balance-deposits-id-cancel": {
        path: "/v2/merchant/balance-deposits/:id/cancel",
        method: "post",
    },
    "get_v2-admin-merchants-id-deposit-policies": {
        path: "/v2/admin/merchants/:id/deposit-policies",
        method: "get",
    },
    "post_v2-admin-merchants-id-deposit-policies": {
        path: "/v2/admin/merchants/:id/deposit-policies",
        method: "post",
    },
    "get_v2-admin-merchants-id-deposit-policies-policyid": {
        path: "/v2/admin/merchants/:id/deposit-policies/:policyId",
        method: "get",
    },
    "patch_v2-admin-merchants-id-deposit-policies-policyid": {
        path: "/v2/admin/merchants/:id/deposit-policies/:policyId",
        method: "patch",
    },
    "delete_v2-admin-merchants-id-deposit-policies-policyid": {
        path: "/v2/admin/merchants/:id/deposit-policies/:policyId",
        method: "delete",
    },
    "get_v2-admin-merchant-deposits": {
        path: "/v2/admin/merchant-deposits",
        method: "get",
    },
    "post_v2-admin-merchant-deposits": {
        path: "/v2/admin/merchant-deposits",
        method: "post",
    },
    "get_v2-admin-merchant-deposits-id": {
        path: "/v2/admin/merchant-deposits/:id",
        method: "get",
    },
    "post_v2-admin-merchant-deposits-id-cancel": {
        path: "/v2/admin/merchant-deposits/:id/cancel",
        method: "post",
    },
    "get_v2-merchant-stat": {
        path: "/v2/merchant/stat",
        method: "get",
    },
    "post_v2-merchant-stat": {
        path: "/v2/merchant/stat",
        method: "post",
    },
    "get_v2-merchant-banks": {
        path: "/v2/merchant/banks",
        method: "get",
    },
    "get_v2-merchant-status": {
        path: "/v2/merchant/status",
        method: "get",
    },
    "get_v2-merchant-transactions": {
        path: "/v2/merchant/transactions",
        method: "get",
    },
    "post_v2-merchant-transactions": {
        path: "/v2/merchant/transactions",
        method: "post",
    },
    "get_v2-merchant-transactions-id": {
        path: "/v2/merchant/transactions/:id",
        method: "get",
    },
    "post_v2-merchant-transactions-payment-page": {
        path: "/v2/merchant/transactions/payment-page",
        method: "post",
    },
    "post_v2-merchant-transactions-payment-page-select": {
        path: "/v2/merchant/transactions/payment-page-select",
        method: "post",
    },
    "get_v2-merchant-transactions-status": {
        path: "/v2/merchant/transactions/status",
        method: "get",
    },
    "post_v2-merchant-transactions-withdrawal": {
        path: "/v2/merchant/transactions/withdrawal",
        method: "post",
    },
    "post_v2-merchant-transactions-sbp": {
        path: "/v2/merchant/transactions/sbp",
        method: "post",
    },
    "post_v2-merchant-transactions-id-cancel": {
        path: "/v2/merchant/transactions/:id/cancel",
        method: "post",
    },
    "post_v2-merchant-withdrawal": {
        path: "/v2/merchant/withdrawal",
        method: "post",
    },
    "get_v2-merchant-balance-withdrawals": {
        path: "/v2/merchant/balance-withdrawals",
        method: "get",
    },
    "post_v2-merchant-balance-withdrawals": {
        path: "/v2/merchant/balance-withdrawals",
        method: "post",
    },
    "get_v2-admin-merchants-id-withdrawal-policies": {
        path: "/v2/admin/merchants/:id/withdrawal-policies",
        method: "get",
    },
    "post_v2-admin-merchants-id-withdrawal-policies": {
        path: "/v2/admin/merchants/:id/withdrawal-policies",
        method: "post",
    },
    "get_v2-admin-merchants-id-withdrawal-policies-policyid": {
        path: "/v2/admin/merchants/:id/withdrawal-policies/:policyId",
        method: "get",
    },
    "patch_v2-admin-merchants-id-withdrawal-policies-policyid": {
        path: "/v2/admin/merchants/:id/withdrawal-policies/:policyId",
        method: "patch",
    },
    "delete_v2-admin-merchants-id-withdrawal-policies-policyid": {
        path: "/v2/admin/merchants/:id/withdrawal-policies/:policyId",
        method: "delete",
    },
    "get_v2-admin-merchant-withdrawals": {
        path: "/v2/admin/merchant-withdrawals",
        method: "get",
    },
    "get_v2-admin-merchant-withdrawals-id": {
        path: "/v2/admin/merchant-withdrawals/:id",
        method: "get",
    },
    "post_v2-admin-merchant-withdrawals-id-cancel": {
        path: "/v2/admin/merchant-withdrawals/:id/cancel",
        method: "post",
    },
    "post_v2-admin-merchant-withdrawals-id-apply": {
        path: "/v2/admin/merchant-withdrawals/:id/apply",
        method: "post",
    },
    "get_v2-admin-merchants": {
        path: "/v2/admin/merchants",
        method: "get",
    },
    "post_v2-admin-merchants": {
        path: "/v2/admin/merchants",
        method: "post",
    },
    "patch_v2-admin-merchants-id": {
        path: "/v2/admin/merchants/:id",
        method: "patch",
    },
    "delete_v2-admin-merchants-id": {
        path: "/v2/admin/merchants/:id",
        method: "delete",
    },
    "post_v2-admin-merchants-id-enable": {
        path: "/v2/admin/merchants/:id/enable",
        method: "post",
    },
    "post_v2-admin-merchants-id-disable": {
        path: "/v2/admin/merchants/:id/disable",
        method: "post",
    },
    "post_v2-admin-merchants-id-restore": {
        path: "/v2/admin/merchants/:id/restore",
        method: "post",
    },
    "post_v2-admin-merchants-merchantid-stat": {
        path: "/v2/admin/merchants/:merchantId/stat",
        method: "post",
    },
    "get_v2-admin-merchants-merchantid-stat": {
        path: "/v2/admin/merchants/:merchantId/stat",
        method: "get",
    },
    "get_v2-admin-merchants-merchantid": {
        path: "/v2/admin/merchants/:merchantId",
        method: "get",
    },
    "get_v2-admin-merchants-id-balance-transactions": {
        path: "/v2/admin/merchants/:id/balance-transactions",
        method: "get",
    },
    "post_v2-admin-merchants-id-keycloak-credentials": {
        path: "/v2/admin/merchants/:id/keycloak-credentials",
        method: "post",
    },
    "post_v2-mostbet-transactions": {
        path: "/v2/mostbet/transactions",
        method: "post",
    },
    "get_v2-mostbet-transactions-status-transactionid": {
        path: "/v2/mostbet/transactions/status/:transactionId",
        method: "get",
    },
    "get_v2-orders-orderid": {
        path: "/v2/orders/:orderId",
        method: "get",
    },
    "get_v2-orders-orderid-status": {
        path: "/v2/orders/:orderId/status",
        method: "get",
    },
    "post_v2-orders-orderid-cancel": {
        path: "/v2/orders/:orderId/cancel",
        method: "post",
    },
    "post_v2-p2p-payments": {
        path: "/v2/p2p/payments",
        method: "post",
    },
    "post_v2-payment-form-orderid": {
        path: "/v2/payment-form/:orderId",
        method: "post",
    },
    "get_v2-payment-form-orderid": {
        path: "/v2/payment-form/:orderId",
        method: "get",
    },
    "get_v2-admin-payment-providers-id-deposit-policies": {
        path: "/v2/admin/payment-providers/:id/deposit-policies",
        method: "get",
    },
    "post_v2-admin-payment-providers-id-deposit-policies": {
        path: "/v2/admin/payment-providers/:id/deposit-policies",
        method: "post",
    },
    "get_v2-admin-payment-providers-id-deposit-policies-policyid": {
        path: "/v2/admin/payment-providers/:id/deposit-policies/:policyId",
        method: "get",
    },
    "patch_v2-admin-payment-providers-id-deposit-policies-policyid": {
        path: "/v2/admin/payment-providers/:id/deposit-policies/:policyId",
        method: "patch",
    },
    "delete_v2-admin-payment-providers-id-deposit-policies-policyid": {
        path: "/v2/admin/payment-providers/:id/deposit-policies/:policyId",
        method: "delete",
    },
    "post_v2-admin-payment-providers-id-deposit-policies-policyid-enable": {
        path: "/v2/admin/payment-providers/:id/deposit-policies/:policyId/enable",
        method: "post",
    },
    "post_v2-admin-payment-providers-id-deposit-policies-policyid-disable": {
        path: "/v2/admin/payment-providers/:id/deposit-policies/:policyId/disable",
        method: "post",
    },
    "get_v2-admin-payment-providers-id-withdrawal-policies": {
        path: "/v2/admin/payment-providers/:id/withdrawal-policies",
        method: "get",
    },
    "post_v2-admin-payment-providers-id-withdrawal-policies": {
        path: "/v2/admin/payment-providers/:id/withdrawal-policies",
        method: "post",
    },
    "get_v2-admin-payment-providers-id-withdrawal-policies-policyid": {
        path: "/v2/admin/payment-providers/:id/withdrawal-policies/:policyId",
        method: "get",
    },
    "patch_v2-admin-payment-providers-id-withdrawal-policies-policyid": {
        path: "/v2/admin/payment-providers/:id/withdrawal-policies/:policyId",
        method: "patch",
    },
    "delete_v2-admin-payment-providers-id-withdrawal-policies-policyid": {
        path: "/v2/admin/payment-providers/:id/withdrawal-policies/:policyId",
        method: "delete",
    },
    "post_v2-admin-payment-providers-id-withdrawal-policies-policyid-enable": {
        path: "/v2/admin/payment-providers/:id/withdrawal-policies/:policyId/enable",
        method: "post",
    },
    "post_v2-admin-payment-providers-id-withdrawal-policies-policyid-disable": {
        path: "/v2/admin/payment-providers/:id/withdrawal-policies/:policyId/disable",
        method: "post",
    },
    "get_v2-admin-payment-providers": {
        path: "/v2/admin/payment-providers",
        method: "get",
    },
    "post_v2-admin-payment-providers": {
        path: "/v2/admin/payment-providers",
        method: "post",
    },
    "get_v2-admin-payment-providers-id": {
        path: "/v2/admin/payment-providers/:id",
        method: "get",
    },
    "patch_v2-admin-payment-providers-id": {
        path: "/v2/admin/payment-providers/:id",
        method: "patch",
    },
    "delete_v2-admin-payment-providers-id": {
        path: "/v2/admin/payment-providers/:id",
        method: "delete",
    },
    "post_v2-admin-payment-providers-id-enable": {
        path: "/v2/admin/payment-providers/:id/enable",
        method: "post",
    },
    "post_v2-admin-payment-providers-id-disable": {
        path: "/v2/admin/payment-providers/:id/disable",
        method: "post",
    },
    "post_v2-admin-providers-providerid-reconciliation": {
        path: "/v2/admin/providers/:providerId/reconciliation",
        method: "post",
    },
    "get_v2-admin-sms-messages": {
        path: "/v2/admin/sms-messages",
        method: "get",
    },
    "get_v2-admin-sms-messages-id": {
        path: "/v2/admin/sms-messages/:id",
        method: "get",
    },
    "post_v2-stub-callback-success": {
        path: "/v2/stub/callback/success",
        method: "post",
    },
    "post_v2-stub-callback-failure": {
        path: "/v2/stub/callback/failure",
        method: "post",
    },
    "post_v2-support-transactions-transactionid-accept": {
        path: "/v2/support/transactions/:transactionId/accept",
        method: "post",
    },
    "post_v2-support-transactions-transactionid-deny": {
        path: "/v2/support/transactions/:transactionId/deny",
        method: "post",
    },
    "get_v2-support-transactions-transactionid": {
        path: "/v2/support/transactions/:transactionId",
        method: "get",
    },
    "post_v2-support-transactions-transactionid-change-amount": {
        path: "/v2/support/transactions/:transactionId/change-amount",
        method: "post",
    },
    "post_v2-support-appeals-appellationid-accept": {
        path: "/v2/support/appeals/:appellationId/accept",
        method: "post",
    },
    "post_v2-support-appeals-appellationid-deny": {
        path: "/v2/support/appeals/:appellationId/deny",
        method: "post",
    },
    "post_v2-support-manual-confirm": {
        path: "/v2/support/manual-confirm",
        method: "post",
    },
    "post_v2-support-teams-teamid-withdrawals-withdrawalid-accept": {
        path: "/v2/support/teams/:teamId/withdrawals/:withdrawalId/accept",
        method: "post",
    },
    "post_v2-support-teams-teamid-withdrawals-withdrawalid-deny": {
        path: "/v2/support/teams/:teamId/withdrawals/:withdrawalId/deny",
        method: "post",
    },
    "post_v2-support-merchants-merchantid-withdrawals-withdrawalid-deny": {
        path: "/v2/support/merchants/:merchantId/withdrawals/:withdrawalId/deny",
        method: "post",
    },
    "post_v2-support-merchants-merchantid-withdrawals-withdrawalid-accept": {
        path: "/v2/support/merchants/:merchantId/withdrawals/:withdrawalId/accept",
        method: "post",
    },
    "post_v2-support-affiliates-affiliateid-withdrawals-withdrawalid-deny": {
        path: "/v2/support/affiliates/:affiliateId/withdrawals/:withdrawalId/deny",
        method: "post",
    },
    "post_v2-support-affiliates-affiliateid-withdrawals-withdrawalid-accept": {
        path: "/v2/support/affiliates/:affiliateId/withdrawals/:withdrawalId/accept",
        method: "post",
    },
    "get_v2-admin-system": {
        path: "/v2/admin/system",
        method: "get",
    },
    "patch_v2-admin-system": {
        path: "/v2/admin/system",
        method: "patch",
    },
    "post_v2-admin-teams": {
        path: "/v2/admin/teams",
        method: "post",
    },
    "get_v2-admin-teams": {
        path: "/v2/admin/teams",
        method: "get",
    },
    "post_v2-admin-teams-teamid-enable": {
        path: "/v2/admin/teams/:teamId/enable",
        method: "post",
    },
    "post_v2-admin-teams-teamid-disable": {
        path: "/v2/admin/teams/:teamId/disable",
        method: "post",
    },
    "patch_v2-admin-teams-teamid": {
        path: "/v2/admin/teams/:teamId",
        method: "patch",
    },
    "delete_v2-admin-teams-teamid": {
        path: "/v2/admin/teams/:teamId",
        method: "delete",
    },
    "get_v2-admin-teams-teamid": {
        path: "/v2/admin/teams/:teamId",
        method: "get",
    },
    "get_v2-admin-teams-teamid-stat": {
        path: "/v2/admin/teams/:teamId/stat",
        method: "get",
    },
    "get_v2-admin-teams-teamid-requisites": {
        path: "/v2/admin/teams/:teamId/requisites",
        method: "get",
    },
    "get_v2-admin-teams-teamid-bank-accounts": {
        path: "/v2/admin/teams/:teamId/bank-accounts",
        method: "get",
    },
    "post_v2-admin-teams-teamid-add-insurance-balance": {
        path: "/v2/admin/teams/:teamId/add-insurance-balance",
        method: "post",
    },
    "post_v2-admin-teams-teamid-remove-insurance-balance": {
        path: "/v2/admin/teams/:teamId/remove-insurance-balance",
        method: "post",
    },
    "post_v2-admin-teams-teamid-keycloak-credentials": {
        path: "/v2/admin/teams/:teamId/keycloak-credentials",
        method: "post",
    },
    "get_v2-team-balance-deposits": {
        path: "/v2/team/balance-deposits",
        method: "get",
    },
    "post_v2-team-balance-deposits": {
        path: "/v2/team/balance-deposits",
        method: "post",
    },
    "get_v2-team-balance-deposits-id-status": {
        path: "/v2/team/balance-deposits/:id/status",
        method: "get",
    },
    "get_v2-team-balance-deposits-unpaid": {
        path: "/v2/team/balance-deposits/unpaid",
        method: "get",
    },
    "post_v2-team-balance-deposits-id-cancel": {
        path: "/v2/team/balance-deposits/:id/cancel",
        method: "post",
    },
    "get_v2-admin-teams-id-deposit-policies": {
        path: "/v2/admin/teams/:id/deposit-policies",
        method: "get",
    },
    "post_v2-admin-teams-id-deposit-policies": {
        path: "/v2/admin/teams/:id/deposit-policies",
        method: "post",
    },
    "get_v2-admin-teams-id-deposit-policies-policyid": {
        path: "/v2/admin/teams/:id/deposit-policies/:policyId",
        method: "get",
    },
    "patch_v2-admin-teams-id-deposit-policies-policyid": {
        path: "/v2/admin/teams/:id/deposit-policies/:policyId",
        method: "patch",
    },
    "delete_v2-admin-teams-id-deposit-policies-policyid": {
        path: "/v2/admin/teams/:id/deposit-policies/:policyId",
        method: "delete",
    },
    "post_v2-admin-teams-id-deposit-policies-policyid-enable": {
        path: "/v2/admin/teams/:id/deposit-policies/:policyId/enable",
        method: "post",
    },
    "post_v2-admin-teams-id-deposit-policies-policyid-disable": {
        path: "/v2/admin/teams/:id/deposit-policies/:policyId/disable",
        method: "post",
    },
    "get_v2-team-deposit-policies": {
        path: "/v2/team/deposit-policies",
        method: "get",
    },
    "get_v2-team-deposit-policies-policyid": {
        path: "/v2/team/deposit-policies/:policyId",
        method: "get",
    },
    "patch_v2-team-deposit-policies-policyid": {
        path: "/v2/team/deposit-policies/:policyId",
        method: "patch",
    },
    "post_v2-team-deposit-policies-policyid-enable": {
        path: "/v2/team/deposit-policies/:policyId/enable",
        method: "post",
    },
    "post_v2-team-deposit-policies-policyid-disable": {
        path: "/v2/team/deposit-policies/:policyId/disable",
        method: "post",
    },
    "get_v2-admin-team-deposits": {
        path: "/v2/admin/team-deposits",
        method: "get",
    },
    "post_v2-admin-team-deposits": {
        path: "/v2/admin/team-deposits",
        method: "post",
    },
    "get_v2-admin-team-deposits-id": {
        path: "/v2/admin/team-deposits/:id",
        method: "get",
    },
    "post_v2-admin-team-deposits-id-cancel": {
        path: "/v2/admin/team-deposits/:id/cancel",
        method: "post",
    },
    "post_v2-team-enable": {
        path: "/v2/team/enable",
        method: "post",
    },
    "post_v2-team-disable": {
        path: "/v2/team/disable",
        method: "post",
    },
    "patch_v2-team-rate-down-scale": {
        path: "/v2/team/rate-down-scale",
        method: "patch",
    },
    "get_v2-team-stat": {
        path: "/v2/team/stat",
        method: "get",
    },
    "post_v2-team-stat": {
        path: "/v2/team/stat",
        method: "post",
    },
    "get_v2-team-status": {
        path: "/v2/team/status",
        method: "get",
    },
    "get_v2-team-transactions": {
        path: "/v2/team/transactions",
        method: "get",
    },
    "post_v2-team-transactions-transactionid-accept": {
        path: "/v2/team/transactions/:transactionId/accept",
        method: "post",
    },
    "post_v2-team-transactions-transactionid-withdrawal-accept": {
        path: "/v2/team/transactions/:transactionId/withdrawal-accept",
        method: "post",
    },
    "post_v2-team-transactions-transactionid-withdrawal-decline": {
        path: "/v2/team/transactions/:transactionId/withdrawal-decline",
        method: "post",
    },
    "get_v2-team-balance-withdrawals": {
        path: "/v2/team/balance-withdrawals",
        method: "get",
    },
    "post_v2-team-withdrawal": {
        path: "/v2/team/withdrawal",
        method: "post",
    },
    "post_v2-team-insurance-balance-withdrawal": {
        path: "/v2/team/insurance-balance-withdrawal",
        method: "post",
    },
    "get_v2-team-withdrawal-policies": {
        path: "/v2/team/withdrawal-policies",
        method: "get",
    },
    "patch_v2-team-withdrawal-policies-policyid": {
        path: "/v2/team/withdrawal-policies/:policyId",
        method: "patch",
    },
    "post_v2-team-withdrawal-policies-policyid-enable": {
        path: "/v2/team/withdrawal-policies/:policyId/enable",
        method: "post",
    },
    "post_v2-team-withdrawal-policies-policyid-disable": {
        path: "/v2/team/withdrawal-policies/:policyId/disable",
        method: "post",
    },
    "get_v2-admin-team-withdrawals": {
        path: "/v2/admin/team-withdrawals",
        method: "get",
    },
    "get_v2-admin-team-withdrawals-id": {
        path: "/v2/admin/team-withdrawals/:id",
        method: "get",
    },
    "post_v2-admin-team-withdrawals-id-cancel": {
        path: "/v2/admin/team-withdrawals/:id/cancel",
        method: "post",
    },
    "post_v2-admin-team-withdrawals-id-apply": {
        path: "/v2/admin/team-withdrawals/:id/apply",
        method: "post",
    },
    "get_v2-team-autocomplete-banks": {
        path: "/v2/team/autocomplete/banks",
        method: "get",
    },
    "get_v2-team-autocomplete-countries": {
        path: "/v2/team/autocomplete/countries",
        method: "get",
    },
    "get_v2-team-autocomplete-bank-accounts": {
        path: "/v2/team/autocomplete/bank-accounts",
        method: "get",
    },
    "get_v2-admin-traffic-cascades-trafficcascadeid-payment-providers": {
        path: "/v2/admin/traffic-cascades/:trafficCascadeId/payment-providers",
        method: "get",
    },
    "post_v2-admin-traffic-cascades-trafficcascadeid-payment-providers": {
        path: "/v2/admin/traffic-cascades/:trafficCascadeId/payment-providers",
        method: "post",
    },
    "get_v2-admin-traffic-cascades-trafficcascadeid-payment-providers-paymentproviderid":
        {
            path: "/v2/admin/traffic-cascades/:trafficCascadeId/payment-providers/:paymentProviderId",
            method: "get",
        },
    "patch_v2-admin-traffic-cascades-trafficcascadeid-payment-providers-paymentproviderid":
        {
            path: "/v2/admin/traffic-cascades/:trafficCascadeId/payment-providers/:paymentProviderId",
            method: "patch",
        },
    "delete_v2-admin-traffic-cascades-trafficcascadeid-payment-providers-paymentproviderid":
        {
            path: "/v2/admin/traffic-cascades/:trafficCascadeId/payment-providers/:paymentProviderId",
            method: "delete",
        },
    "post_v2-admin-traffic-cascades-trafficcascadeid-payment-providers-paymentproviderid-enable":
        {
            path: "/v2/admin/traffic-cascades/:trafficCascadeId/payment-providers/:paymentProviderId/enable",
            method: "post",
        },
    "post_v2-admin-traffic-cascades-trafficcascadeid-payment-providers-paymentproviderid-disable":
        {
            path: "/v2/admin/traffic-cascades/:trafficCascadeId/payment-providers/:paymentProviderId/disable",
            method: "post",
        },
    "get_v2-admin-traffic-cascades": {
        path: "/v2/admin/traffic-cascades",
        method: "get",
    },
    "post_v2-admin-traffic-cascades": {
        path: "/v2/admin/traffic-cascades",
        method: "post",
    },
    "get_v2-admin-traffic-cascades-id": {
        path: "/v2/admin/traffic-cascades/:id",
        method: "get",
    },
    "patch_v2-admin-traffic-cascades-id": {
        path: "/v2/admin/traffic-cascades/:id",
        method: "patch",
    },
    "delete_v2-admin-traffic-cascades-id": {
        path: "/v2/admin/traffic-cascades/:id",
        method: "delete",
    },
    "get_v2-admin-traffic-threads": {
        path: "/v2/admin/traffic-threads",
        method: "get",
    },
    "post_v2-admin-traffic-threads": {
        path: "/v2/admin/traffic-threads",
        method: "post",
    },
    "patch_v2-admin-traffic-threads-trafficthreadid": {
        path: "/v2/admin/traffic-threads/:trafficThreadId",
        method: "patch",
    },
    "delete_v2-admin-traffic-threads-trafficthreadid": {
        path: "/v2/admin/traffic-threads/:trafficThreadId",
        method: "delete",
    },
    "get_v2-admin-traffic-threads-trafficthreadid": {
        path: "/v2/admin/traffic-threads/:trafficThreadId",
        method: "get",
    },
    "get_v2-admin-traffic-threads-trafficthreadid-teams": {
        path: "/v2/admin/traffic-threads/:trafficThreadId/teams",
        method: "get",
    },
    "post_v2-admin-traffic-threads-trafficthreadid-teams": {
        path: "/v2/admin/traffic-threads/:trafficThreadId/teams",
        method: "post",
    },
    "delete_v2-admin-traffic-threads-trafficthreadid-teams-trafficthreadteamid":
        {
            path: "/v2/admin/traffic-threads/:trafficThreadId/teams/:trafficThreadTeamId",
            method: "delete",
        },
    "patch_v2-admin-traffic-threads-trafficthreadid-teams-trafficthreadteamid":
        {
            path: "/v2/admin/traffic-threads/:trafficThreadId/teams/:trafficThreadTeamId",
            method: "patch",
        },
    "get_v2-admin-traffic-threads-trafficthreadid-teams-trafficthreadteamid": {
        path: "/v2/admin/traffic-threads/:trafficThreadId/teams/:trafficThreadTeamId",
        method: "get",
    },
    "post_v2-admin-traffic-threads-trafficthreadid-teams-trafficthreadteamid-enable":
        {
            path: "/v2/admin/traffic-threads/:trafficThreadId/teams/:trafficThreadTeamId/enable",
            method: "post",
        },
    "post_v2-admin-traffic-threads-trafficthreadid-teams-trafficthreadteamid-disable":
        {
            path: "/v2/admin/traffic-threads/:trafficThreadId/teams/:trafficThreadTeamId/disable",
            method: "post",
        },
    "get_v2-admin-turnover": {
        path: "/v2/admin/turnover",
        method: "get",
    },
} as const;
