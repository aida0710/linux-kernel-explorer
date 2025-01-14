---
sidebar_position: 33
---
# direct-io.h

### ファイル情報

- パス: `linux-v6.12/fs/btrfs/direct-io.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */

#ifndef BTRFS_DIRECT_IO_H
#define BTRFS_DIRECT_IO_H

#include <linux/types.h>

int __init btrfs_init_dio(void);
void __cold btrfs_destroy_dio(void);

ssize_t btrfs_direct_write(struct kiocb *iocb, struct iov_iter *from);
ssize_t btrfs_direct_read(struct kiocb *iocb, struct iov_iter *to);

#endif /* BTRFS_DIRECT_IO_H */

```
