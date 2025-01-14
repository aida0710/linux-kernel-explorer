---
sidebar_position: 34
---
# nop.h

### ファイル情報

- パス: `linux-v6.12/io_uring/nop.h`

### コンテンツ

```h
// SPDX-License-Identifier: GPL-2.0

int io_nop_prep(struct io_kiocb *req, const struct io_uring_sqe *sqe);
int io_nop(struct io_kiocb *req, unsigned int issue_flags);

```
