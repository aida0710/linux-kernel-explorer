---
sidebar_position: 4
---
# tc_em_nbyte.h

### ファイル情報

- パス: `linux-v6.12/include/uapi/linux/tc_ematch/tc_em_nbyte.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 WITH Linux-syscall-note */
#ifndef __LINUX_TC_EM_NBYTE_H
#define __LINUX_TC_EM_NBYTE_H

#include <linux/types.h>
#include <linux/pkt_cls.h>

struct tcf_em_nbyte {
	__u16		off;
	__u16		len:12;
	__u8		layer:4;
};

#endif

```
