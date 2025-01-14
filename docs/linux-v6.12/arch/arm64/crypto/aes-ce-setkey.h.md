---
sidebar_position: 6
---
# aes-ce-setkey.h

### ファイル情報

- パス: `linux-v6.12/arch/arm64/crypto/aes-ce-setkey.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */

int ce_aes_setkey(struct crypto_tfm *tfm, const u8 *in_key,
		  unsigned int key_len);
int ce_aes_expandkey(struct crypto_aes_ctx *ctx, const u8 *in_key,
		     unsigned int key_len);

```
