---
sidebar_position: 6
---
# bdc_dbg.h

### ファイル情報

- パス: `linux-v6.12/drivers/usb/gadget/udc/bdc/bdc_dbg.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0+ */
/*
 * bdc_dbg.h - header for the BDC debug functions
 *
 * Copyright (C) 2014 Broadcom Corporation
 *
 * Author: Ashwini Pahuja
 */
#ifndef __LINUX_BDC_DBG_H__
#define __LINUX_BDC_DBG_H__

#include "bdc.h"

#ifdef CONFIG_USB_GADGET_VERBOSE
void bdc_dbg_bd_list(struct bdc *bdc, struct bdc_ep *ep);
void bdc_dbg_srr(struct bdc *bdc, u32 srr_num);
void bdc_dbg_regs(struct bdc *bdc);
void bdc_dump_epsts(struct bdc *bdc);
#else
static inline void bdc_dbg_regs(struct bdc *bdc)
{ }

static inline void bdc_dbg_srr(struct bdc *bdc, u32 srr_num)
{ }

static inline void bdc_dbg_bd_list(struct bdc *bdc, struct bdc_ep *ep)
{ }

static inline void bdc_dump_epsts(struct bdc *bdc)
{ }
#endif /* CONFIG_USB_GADGET_VERBOSE */
#endif /* __LINUX_BDC_DBG_H__ */

```
