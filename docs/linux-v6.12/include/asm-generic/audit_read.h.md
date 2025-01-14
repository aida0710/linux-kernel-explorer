---
sidebar_position: 10
---
# audit_read.h

### ファイル情報

- パス: `linux-v6.12/include/asm-generic/audit_read.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifdef __NR_readlink
__NR_readlink,
#endif
__NR_quotactl,
__NR_listxattr,
__NR_llistxattr,
__NR_flistxattr,
__NR_getxattr,
__NR_lgetxattr,
__NR_fgetxattr,
#ifdef __NR_readlinkat
__NR_readlinkat,
#endif

```
