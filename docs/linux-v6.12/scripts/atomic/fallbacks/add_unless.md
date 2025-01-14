---
sidebar_position: 3
---
# add_unless

### ファイル情報

- パス: `linux-v6.12/scripts/atomic/fallbacks/add_unless`

### コンテンツ

```txt
cat << EOF
	return raw_${atomic}_fetch_add_unless(v, a, u) != u;
EOF

```
