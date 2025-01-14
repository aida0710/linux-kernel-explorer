---
sidebar_position: 2
---
# net.h

### ファイル情報

- パス: `linux-v6.12/include/linux/io_uring/net.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-or-later */
#ifndef _LINUX_IO_URING_NET_H
#define _LINUX_IO_URING_NET_H

struct io_uring_cmd;

#if defined(CONFIG_IO_URING)
int io_uring_cmd_sock(struct io_uring_cmd *cmd, unsigned int issue_flags);

#else
static inline int io_uring_cmd_sock(struct io_uring_cmd *cmd,
				    unsigned int issue_flags)
{
	return -EOPNOTSUPP;
}
#endif

#endif

```
