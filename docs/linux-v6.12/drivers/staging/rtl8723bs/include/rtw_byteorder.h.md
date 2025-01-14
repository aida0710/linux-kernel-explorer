---
sidebar_position: 38
---
# rtw_byteorder.h

### ファイル情報

- パス: `linux-v6.12/drivers/staging/rtl8723bs/include/rtw_byteorder.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/******************************************************************************
 *
 * Copyright(c) 2007 - 2011 Realtek Corporation. All rights reserved.
 *
 ******************************************************************************/
#ifndef _RTL871X_BYTEORDER_H_
#define _RTL871X_BYTEORDER_H_

#if defined(__LITTLE_ENDIAN)
#include <linux/byteorder/little_endian.h>
#else
#  include <linux/byteorder/big_endian.h>
#endif

#endif /* _RTL871X_BYTEORDER_H_ */

```
