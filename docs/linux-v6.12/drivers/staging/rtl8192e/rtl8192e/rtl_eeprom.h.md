---
sidebar_position: 23
---
# rtl_eeprom.h

### ファイル情報

- パス: `linux-v6.12/drivers/staging/rtl8192e/rtl8192e/rtl_eeprom.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * Copyright(c) 2008 - 2010 Realtek Corporation. All rights reserved.
 *
 * Based on the r8180 driver, which is:
 * Copyright 2004-2005 Andrea Merello <andrea.merello@gmail.com>, et al.
 *
 * Contact Information: wlanfae <wlanfae@realtek.com>
 */
#define EPROM_DELAY 10

u32 rtl92e_eeprom_read(struct net_device *dev, u32 addr);

```
