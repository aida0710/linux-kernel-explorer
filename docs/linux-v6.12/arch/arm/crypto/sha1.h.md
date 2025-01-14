---
sidebar_position: 34
---
# sha1.h

### ファイル情報

- パス: `linux-v6.12/arch/arm/crypto/sha1.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef ASM_ARM_CRYPTO_SHA1_H
#define ASM_ARM_CRYPTO_SHA1_H

#include <linux/crypto.h>
#include <crypto/sha1.h>

extern int sha1_update_arm(struct shash_desc *desc, const u8 *data,
			   unsigned int len);

extern int sha1_finup_arm(struct shash_desc *desc, const u8 *data,
			   unsigned int len, u8 *out);

#endif

```
