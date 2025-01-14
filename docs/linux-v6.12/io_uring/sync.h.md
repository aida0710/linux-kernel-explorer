---
sidebar_position: 58
---
# sync.h

### ファイル情報

- パス: `linux-v6.12/io_uring/sync.h`

### コンテンツ

```h
// SPDX-License-Identifier: GPL-2.0

int io_sfr_prep(struct io_kiocb *req, const struct io_uring_sqe *sqe);
int io_sync_file_range(struct io_kiocb *req, unsigned int issue_flags);

int io_fsync_prep(struct io_kiocb *req, const struct io_uring_sqe *sqe);
int io_fsync(struct io_kiocb *req, unsigned int issue_flags);

int io_fallocate(struct io_kiocb *req, unsigned int issue_flags);
int io_fallocate_prep(struct io_kiocb *req, const struct io_uring_sqe *sqe);

```
