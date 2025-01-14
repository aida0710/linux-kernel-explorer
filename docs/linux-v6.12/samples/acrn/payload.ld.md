---
sidebar_position: 3
---
# payload.ld

### ファイル情報

- パス: `linux-v6.12/samples/acrn/payload.ld`

### コンテンツ

```ld
/* SPDX-License-Identifier: GPL-2.0 */
SECTIONS
{
        .payload16 0 : {
                guest16 = .;
                guest16.o(.text)
                guest16_end = .;
        }
}

```
