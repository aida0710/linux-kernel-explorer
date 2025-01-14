---
sidebar_position: 9
---
# sign_key.S

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/sgx/sign_key.S`

### コンテンツ

```S
/* SPDX-License-Identifier: GPL-2.0 */
/**
* Copyright(c) 2016-20 Intel Corporation.
*/

    .section ".rodata", "a"

sign_key:
    .globl sign_key
    .incbin "sign_key.pem"
sign_key_end:
    .globl sign_key_end

```
