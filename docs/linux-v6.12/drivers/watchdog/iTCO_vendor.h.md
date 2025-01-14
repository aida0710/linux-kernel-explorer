---
sidebar_position: 58
---
# iTCO_vendor.h

### ファイル情報

- パス: `linux-v6.12/drivers/watchdog/iTCO_vendor.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/* iTCO Vendor Specific Support hooks */
#ifdef CONFIG_ITCO_VENDOR_SUPPORT
extern int iTCO_vendorsupport;
extern void iTCO_vendor_pre_start(struct resource *, unsigned int);
extern void iTCO_vendor_pre_stop(struct resource *);
extern int iTCO_vendor_check_noreboot_on(void);
#else
#define iTCO_vendorsupport				0
#define iTCO_vendor_pre_start(acpibase, heartbeat)	{}
#define iTCO_vendor_pre_stop(acpibase)			{}
#define iTCO_vendor_check_noreboot_on()			1
				/* 1=check noreboot; 0=don't check */
#endif

```
