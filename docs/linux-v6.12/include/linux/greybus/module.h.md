---
sidebar_position: 10
---
# module.h

### ファイル情報

- パス: `linux-v6.12/include/linux/greybus/module.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * Greybus Module code
 *
 * Copyright 2016 Google Inc.
 * Copyright 2016 Linaro Ltd.
 */

#ifndef __MODULE_H
#define __MODULE_H

#include <linux/types.h>
#include <linux/device.h>

struct gb_module {
	struct device dev;
	struct gb_host_device *hd;

	struct list_head hd_node;

	u8 module_id;
	size_t num_interfaces;

	bool disconnected;

	struct gb_interface *interfaces[];
};
#define to_gb_module(d) container_of(d, struct gb_module, dev)

struct gb_module *gb_module_create(struct gb_host_device *hd, u8 module_id,
				   size_t num_interfaces);
int gb_module_add(struct gb_module *module);
void gb_module_del(struct gb_module *module);
void gb_module_put(struct gb_module *module);

#endif /* __MODULE_H */

```
