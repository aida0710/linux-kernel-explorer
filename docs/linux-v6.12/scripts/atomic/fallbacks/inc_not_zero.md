---
sidebar_position: 14
---
# inc_not_zero

### ファイル情報

- パス: `linux-v6.12/scripts/atomic/fallbacks/inc_not_zero`

### コンテンツ

```txt
cat <<EOF
	return raw_${atomic}_add_unless(v, 1, 0);
EOF

```
