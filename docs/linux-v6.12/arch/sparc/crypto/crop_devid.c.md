---
sidebar_position: 7
---
# crop_devid.c

### ファイル情報

- パス: `linux-v6.12/arch/sparc/crypto/crop_devid.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0
#include <linux/mod_devicetable.h>
#include <linux/module.h>

/* This is a dummy device table linked into all of the crypto
 * opcode drivers.  It serves to trigger the module autoloading
 * mechanisms in userspace which scan the OF device tree and
 * load any modules which have device table entries that
 * match OF device nodes.
 */
static const struct of_device_id crypto_opcode_match[] = {
	{ .name = "cpu", .compatible = "sun4v", },
	{},
};
MODULE_DEVICE_TABLE(of, crypto_opcode_match);

```
