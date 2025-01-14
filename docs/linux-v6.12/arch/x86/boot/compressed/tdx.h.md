---
sidebar_position: 32
---
# tdx.h

### ファイル情報

- パス: `linux-v6.12/arch/x86/boot/compressed/tdx.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef BOOT_COMPRESSED_TDX_H
#define BOOT_COMPRESSED_TDX_H

#include <linux/types.h>

#ifdef CONFIG_INTEL_TDX_GUEST
void early_tdx_detect(void);
#else
static inline void early_tdx_detect(void) { };
#endif

#endif /* BOOT_COMPRESSED_TDX_H */

```
