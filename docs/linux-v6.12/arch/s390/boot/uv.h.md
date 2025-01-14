---
sidebar_position: 30
---
# uv.h

### ファイル情報

- パス: `linux-v6.12/arch/s390/boot/uv.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef BOOT_UV_H
#define BOOT_UV_H

unsigned long adjust_to_uv_max(unsigned long limit);
void sanitize_prot_virt_host(void);
void uv_query_info(void);

#endif /* BOOT_UV_H */

```
