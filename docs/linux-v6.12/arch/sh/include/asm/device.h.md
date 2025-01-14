---
sidebar_position: 32
---
# device.h

### ファイル情報

- パス: `linux-v6.12/arch/sh/include/asm/device.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0
 *
 * Arch specific extensions to struct device
 */
#ifndef __ASM_SH_DEVICE_H
#define __ASM_SH_DEVICE_H

#include <asm-generic/device.h>

struct platform_device;
/* allocate contiguous memory chunk and fill in struct resource */
int platform_resource_setup_memory(struct platform_device *pdev,
				   char *name, unsigned long memsize);

void plat_early_device_setup(void);

#endif /* __ASM_SH_DEVICE_H */

```
