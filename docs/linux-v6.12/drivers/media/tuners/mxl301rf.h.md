---
sidebar_position: 42
---
# mxl301rf.h

### ファイル情報

- パス: `linux-v6.12/drivers/media/tuners/mxl301rf.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * MaxLinear MxL301RF OFDM tuner driver
 *
 * Copyright (C) 2014 Akihiro Tsukada <tskd08@gmail.com>
 */

#ifndef MXL301RF_H
#define MXL301RF_H

#include <media/dvb_frontend.h>

struct mxl301rf_config {
	struct dvb_frontend *fe;
};

#endif /* MXL301RF_H */

```
