---
sidebar_position: 8
---
# led.h

### ファイル情報

- パス: `drivers/net/wireless/realtek/rtlwifi/rtl8192du/led.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/* Copyright(c) 2024  Realtek Corporation.*/

#ifndef __RTL92DU_LED_H__
#define __RTL92DU_LED_H__

void rtl92du_led_control(struct ieee80211_hw *hw, enum led_ctl_mode ledaction);

#endif

```
