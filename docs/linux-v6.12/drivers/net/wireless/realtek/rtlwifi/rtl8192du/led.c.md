---
sidebar_position: 7
---
# led.c

### ファイル情報

- パス: `linux-v6.12/drivers/net/wireless/realtek/rtlwifi/rtl8192du/led.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
/* Copyright(c) 2024  Realtek Corporation.*/

#include "../wifi.h"
#include "led.h"

void rtl92du_led_control(struct ieee80211_hw *hw, enum led_ctl_mode ledaction)
{
	/* The hardware has control. */
}

```
