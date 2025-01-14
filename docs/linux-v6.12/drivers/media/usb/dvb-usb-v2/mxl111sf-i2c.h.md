---
sidebar_position: 29
---
# mxl111sf-i2c.h

### ファイル情報

- パス: `linux-v6.12/drivers/media/usb/dvb-usb-v2/mxl111sf-i2c.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-or-later */
/*
 *  mxl111sf-i2c.h - driver for the MaxLinear MXL111SF
 *
 *  Copyright (C) 2010-2014 Michael Krufky <mkrufky@linuxtv.org>
 */

#ifndef _DVB_USB_MXL111SF_I2C_H_
#define _DVB_USB_MXL111SF_I2C_H_

#include <linux/i2c.h>

int mxl111sf_i2c_xfer(struct i2c_adapter *adap,
		      struct i2c_msg msg[], int num);

#endif /* _DVB_USB_MXL111SF_I2C_H_ */

```
