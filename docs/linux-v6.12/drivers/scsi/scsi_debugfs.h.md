---
sidebar_position: 116
---
# scsi_debugfs.h

### ファイル情報

- パス: `linux-v6.12/drivers/scsi/scsi_debugfs.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
struct request;
struct seq_file;

void scsi_show_rq(struct seq_file *m, struct request *rq);

```
