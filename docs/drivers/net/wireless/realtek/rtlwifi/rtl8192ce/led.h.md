---
sidebar_position: 7
---
# led.h

### ファイル情報

- パス: `drivers/net/wireless/realtek/rtlwifi/rtl8192ce/led.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/* Copyright(c) 2009-2012  Realtek Corporation.*/

#ifndef __RTL92CE_LED_H__
#define __RTL92CE_LED_H__

void rtl92ce_sw_led_on(struct ieee80211_hw *hw, enum rtl_led_pin pin);
void rtl92ce_sw_led_off(struct ieee80211_hw *hw, enum rtl_led_pin pin);
void rtl92ce_led_control(struct ieee80211_hw *hw, enum led_ctl_mode ledaction);

#endif

```
