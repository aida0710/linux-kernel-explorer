---
sidebar_position: 63
---
# xt_pkttype.h

### ファイル情報

- パス: `linux-v6.12/include/uapi/linux/netfilter/xt_pkttype.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 WITH Linux-syscall-note */
#ifndef _XT_PKTTYPE_H
#define _XT_PKTTYPE_H

struct xt_pkttype_info {
	int	pkttype;
	int	invert;
};
#endif /*_XT_PKTTYPE_H*/

```
