---
sidebar_position: 10
---
# hwbus.h

### ファイル情報

- パス: `linux-v6.12/drivers/net/wireless/st/cw1200/hwbus.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * Common hwbus abstraction layer interface for cw1200 wireless driver
 *
 * Copyright (c) 2010, ST-Ericsson
 * Author: Dmitry Tarnyagin <dmitry.tarnyagin@lockless.no>
 */

#ifndef CW1200_HWBUS_H
#define CW1200_HWBUS_H

struct hwbus_priv;

void cw1200_irq_handler(struct cw1200_common *priv);

/* This MUST be wrapped with hwbus_ops->lock/unlock! */
int __cw1200_irq_enable(struct cw1200_common *priv, int enable);

struct hwbus_ops {
	int (*hwbus_memcpy_fromio)(struct hwbus_priv *self, unsigned int addr,
					void *dst, int count);
	int (*hwbus_memcpy_toio)(struct hwbus_priv *self, unsigned int addr,
					const void *src, int count);
	void (*lock)(struct hwbus_priv *self);
	void (*unlock)(struct hwbus_priv *self);
	size_t (*align_size)(struct hwbus_priv *self, size_t size);
	int (*power_mgmt)(struct hwbus_priv *self, bool suspend);
};

#endif /* CW1200_HWBUS_H */

```
