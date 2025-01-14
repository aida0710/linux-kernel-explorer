---
sidebar_position: 1
---
# guest.ld

### ファイル情報

- パス: `linux-v6.12/samples/acrn/guest.ld`

### コンテンツ

```ld
/* SPDX-License-Identifier: GPL-2.0 */
OUTPUT_FORMAT(binary)
SECTIONS
{
        .start : { *(.start) }
        .text : { *(.text*) }
        .rodata : { *(.rodata) }
        .data : { *(.data) }
}

```
