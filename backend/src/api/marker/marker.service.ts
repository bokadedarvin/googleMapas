import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Marker } from './marker.entity';
import {getConnection} from "typeorm";
@Injectable()
export class MarkerService {
    constructor(@InjectRepository(Marker) private markerRepository: Repository<Marker>) { }

    async getMarkerList(): Promise<Marker[]> {
        return await this.markerRepository.find({
            relations: [ 'Type' ]
        });
    }

    async addMarkers(marker: Array<Marker>) {
        return await this.markerRepository.save(marker);
    }

    async updateMarker(marker: Marker) {
        return await this.markerRepository.update(marker.id, marker);
    }

    async deleteMarker(markerId) {
        return await this.markerRepository.delete(markerId);
    }
}
