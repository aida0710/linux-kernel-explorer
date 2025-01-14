---
sidebar_position: 16
---
# module.h

### ファイル情報

- パス: `linux-v6.12/tools/virtio/linux/module.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#include <linux/export.h>

#define MODULE_LICENSE(__MODULE_LICENSE_value) \
	static __attribute__((unused)) const char *__MODULE_LICENSE_name = \
		__MODULE_LICENSE_value


```
