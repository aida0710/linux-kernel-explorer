---
sidebar_position: 18
---
# super.h

### ファイル情報

- パス: `linux-v6.12/fs/befs/super.h`

### コンテンツ

```h
/*
 * super.h
 */

int befs_load_sb(struct super_block *sb, befs_super_block *disk_sb);
int befs_check_sb(struct super_block *sb);

```
