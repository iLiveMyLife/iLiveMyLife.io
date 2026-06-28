#!/usr/bin/env bash
# Adds Bing site-verification CNAME records to Route53 for all 4 sites.
# Run once: bash scripts/bing-dns-verify.sh   (or paste: ! bash D:/Soft/Repositories/iLiveMyLife.io-v_launch/scripts/bing-dns-verify.sh)
set -e
declare -a ROWS=(
  "Z0207585312RZHMS8ND8N 0ab6c3298ab06ac7f4c509d7739ea2e5.basicneeds.me"
  "Z03584711BGGH5NMRPJRC aedc06233ec15e8786e47fc9b6fcd2da.digitaltwins.team"
  "Z2VHQ284EVQK7V ac2c05388e86e28c5a46ecdfacee95fd.wordsteps.com"
  "Z9J5X08T3NA7Z 1adb4ecb81c36cc6f6d5855890300c68.ilivemylife.io"
)
for row in "${ROWS[@]}"; do
  ZID=$(echo "$row" | cut -d' ' -f1); NAME=$(echo "$row" | cut -d' ' -f2)
  echo "UPSERT $NAME -> verify.bing.com"
  aws route53 change-resource-record-sets --hosted-zone-id "$ZID" \
    --change-batch "{\"Changes\":[{\"Action\":\"UPSERT\",\"ResourceRecordSet\":{\"Name\":\"$NAME\",\"Type\":\"CNAME\",\"TTL\":300,\"ResourceRecords\":[{\"Value\":\"verify.bing.com\"}]}}]}" \
    --query "ChangeInfo.Status" --output text
done
echo "DONE — all 4 Bing CNAME records submitted."
