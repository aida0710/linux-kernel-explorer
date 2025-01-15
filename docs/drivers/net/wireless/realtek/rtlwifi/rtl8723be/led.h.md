---
sidebar_position: 9
---
# led.h

### ファイル情報

- パス: `drivers/net/wireless/realtek/rtlwifi/rtl8723be/led.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/* Copyright(c) 2009-2014  Realtek Corporation.*/

#ifndef __RTL8723BE_LED_H__
#define __RTL8723BE_LED_H__

void rtl8723be_sw_led_on(struct ieee80211_hw *hw, enum rtl_led_pin pin);
void rtl8723be_sw_led_off(struct ieee80211_hw *hw, enum rtl_led_pin pin);
void rtl8723be_led_control(struct ieee80211_hw *hw,
			   enum led_ctl_mode ledaction);

#endif

```
