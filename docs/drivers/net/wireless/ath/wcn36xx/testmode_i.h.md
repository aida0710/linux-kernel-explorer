---
sidebar_position: 17
---
# testmode_i.h

### ファイル情報

- パス: `drivers/net/wireless/ath/wcn36xx/testmode_i.h`

### コンテンツ

```h
/*
 * Copyright (c) 2018, The Linux Foundation. All rights reserved.
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

#define WCN36XX_TM_DATA_MAX_LEN		5000

enum wcn36xx_tm_attr {
	__WCN36XX_TM_ATTR_INVALID	= 0,
	WCN36XX_TM_ATTR_CMD		= 1,
	WCN36XX_TM_ATTR_DATA		= 2,

	/* keep last */
	__WCN36XX_TM_ATTR_AFTER_LAST,
	WCN36XX_TM_ATTR_MAX		= __WCN36XX_TM_ATTR_AFTER_LAST - 1,
};

#define WCN36XX_TM_CMD_PTT 3

```
