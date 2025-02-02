---
sidebar_position: 12
---
# pmc.h

### ファイル情報

- パス: `drivers/net/wireless/ath/wcn36xx/pmc.h`

### コンテンツ

```h
/*
 * Copyright (c) 2013 Eugene Krasnikov <k.eugene.e@gmail.com>
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY
 * SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION
 * OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN
 * CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

#ifndef _WCN36XX_PMC_H_
#define _WCN36XX_PMC_H_

struct wcn36xx;

enum wcn36xx_power_state {
	WCN36XX_FULL_POWER,
	WCN36XX_BMPS
};

int wcn36xx_pmc_enter_bmps_state(struct wcn36xx *wcn,
				 struct ieee80211_vif *vif);
int wcn36xx_pmc_exit_bmps_state(struct wcn36xx *wcn,
				struct ieee80211_vif *vif);
int wcn36xx_enable_keep_alive_null_packet(struct wcn36xx *wcn,
					  struct ieee80211_vif *vif);
#endif	/* _WCN36XX_PMC_H_ */

```
