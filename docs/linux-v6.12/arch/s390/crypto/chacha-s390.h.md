---
sidebar_position: 4
---
# chacha-s390.h

### ファイル情報

- パス: `linux-v6.12/arch/s390/crypto/chacha-s390.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * s390 ChaCha stream cipher.
 *
 * Copyright IBM Corp. 2021
 */

#ifndef _CHACHA_S390_H
#define _CHACHA_S390_H

void chacha20_vx(u8 *out, const u8 *inp, size_t len, const u32 *key,
		 const u32 *counter);

#endif /* _CHACHA_S390_H */

```
