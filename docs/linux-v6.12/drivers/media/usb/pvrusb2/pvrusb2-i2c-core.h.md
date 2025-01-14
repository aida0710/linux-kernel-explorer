---
sidebar_position: 29
---
# pvrusb2-i2c-core.h

### ファイル情報

- パス: `linux-v6.12/drivers/media/usb/pvrusb2/pvrusb2-i2c-core.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 *
 *  Copyright (C) 2005 Mike Isely <isely@pobox.com>
 */
#ifndef __PVRUSB2_I2C_CORE_H
#define __PVRUSB2_I2C_CORE_H

struct pvr2_hdw;

void pvr2_i2c_core_init(struct pvr2_hdw *);
void pvr2_i2c_core_done(struct pvr2_hdw *);


#endif /* __PVRUSB2_I2C_ADAPTER_H */

```
